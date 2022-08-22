import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import CountriesForm from './components/CountriesForm';
import CountryDetails from './components/CountryDetails';
import Header from './components/Header';
import useCountries from './hooks/useCountries';
import Loader from "./components/Loader"

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
				setTimeout(() => busy = false, 600);
			}
		}
	}, []);

	return (
		<>
			<Header />
			<CountriesForm />
			{
				loading
					? <Loader />
					: <main className="flagsList grid gap-11 grid-cols-fill p-7">
						<Cards countries={countries} MAX_PAGES={maxPages} />
					</main>
			}
			{/* <CountryDetails country={countries} /> */}

			<footer className="p-5 text-right absolute bottom-0 w-full">
				<p>
					Made with ♥️ by <a href="https://github.com/cosmoart" target="_blank" rel="noopener noreferrer" className="text-sky-400 font-semibold">Cosmo</a>
				</p>
			</footer>

		</>
	)
}

export default App
