import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import CountriesForm from './components/CountriesForm';
import CountryDetails from './components/countryDetails';
import Header from './components/Header';
import useCountries from './hooks/useCountries';

function App() {
	const MAX_PAGES = 24;
	const [maxPages, setMaxPages] = useState(MAX_PAGES);

	const [loading, countries] = useCountries("https://restcountries.com/v3.1/all");

	useEffect(() => {
		let busy = false;
		window.onscroll = function (e) {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !busy) {
				setMaxPages(maxPages + MAX_PAGES);
				console.log("Bottom");
				busy = true;
				setTimeout(() => {
					busy = false;
				}, 600);
			}
		}
	}, []);

	return (
		<>
			<Header />
			<CountriesForm />
			{
				loading
					? <h1>Loading...</h1>
					: <main className="flagsList grid gap-10 grid-cols-fill p-7">
						<Cards countries={countries} MAX_PAGES={maxPages} />
					</main>
			}
			<CountryDetails countries={countries} />
		</>
	)
}

export default App
