import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import useCountries from './hooks/useCountries';

function App() {
	const MAX_PAGES = 24;
	const [loading, countries] = useCountries("https://restcountries.com/v3.1/all");

	useEffect(() => {
		let busy = false;
		window.onscroll = function (e) {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !busy) {
				console.log("bottom");
				busy = true;
				setTimeout(() => {
					busy = false;
				}, 600);
			}
		}
	}, []);

	return (
		<>
			{
				loading
					? <h1>Loading...</h1>
					: <Cards countries={countries} MAX_PAGES={MAX_PAGES} />
			}
		</>
	)
}

export default App
