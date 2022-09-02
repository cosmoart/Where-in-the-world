import { useEffect, useState } from 'react';

import Cards from './components/Cards';
import CountriesForm from './components/CountriesForm';
import CountryDetails from './components/CountryDetails';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import BackToTopBtn from './components/BackToTopBtn';

import loaderSVG from "./assets/icons/loader.svg"

function App() {
	const MAX_PAGES = 24;
	const [allCountries, setAllCountries] = useState([]);
	const [countries, setCountries] = useState([]);
	const [maxPages, setMaxPages] = useState(MAX_PAGES);
	const [loading, setLoading] = useState(true);
	const [country, setCountry] = useState("");

	function getCountries(url) {
		setLoading(true);
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setAllCountries(data);
				setCountries(data)
				if (location.pathname !== "/") {
					let countryPath = data.find(el => el.name.common.toLowerCase().replace(/ /ig, "-") === location.pathname.slice(1).toLowerCase().replace(/ /ig, "-"));
					if (countryPath) setCountry(countryPath)
				}
			})
			.catch(() => setCountries({ "error": "Oops... Something is wrong" }))
			.finally(() => setLoading(false));
	}

	useEffect(() => {
		getCountries("https://restcountries.com/v3.1/all")

		let busy = false;
		document.addEventListener("scroll", () => {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !busy) {
				setMaxPages(max => max + MAX_PAGES);
				busy = true;
				setTimeout(() => busy = false, 600);
			}
		})

		// Show the :active outline only in key down
		document.body.addEventListener('mousedown', () => document.body.classList.add('using-mouse'));
		document.body.addEventListener('keydown', (e) => {
			if (e.key === "Tab") document.body.classList.remove('using-mouse');
		});
	}, []);

	return (
		<>
			<MainHeader />
			{country && <CountryDetails country={country} setCountry={setCountry} />}
			<CountriesForm setCountries={setCountries} allCountries={allCountries} />
			<main className="flagsList grid gap-14 quadHD:gap-[75px] grid-cols-fill px-7 sm:px-16 quadHD:px-20 relative">
				{loading
					? <img src={loaderSVG} alt="Loading..." className="w-24 absolute-center" />
					: <Cards countries={countries} maxPages={maxPages} setCountry={setCountry} getCountries={getCountries} />
				}
			</main>
			<MainFooter />
			<BackToTopBtn />
		</>
	)
}

export default App
