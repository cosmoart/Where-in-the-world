import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import CountriesForm from './components/CountriesForm';
import CountryDetails from './components/CountryDetails';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Loader from "./components/Loader";
import Error404 from "./components/Error404"

function App() {
	const MAX_PAGES = 24;
	const [allCountries, setAllCountries] = useState([]);

	const [maxPages, setMaxPages] = useState(MAX_PAGES);

	const [loading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);
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
			.catch(() => setCountries("Error"))
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
			if (scrollY >= 200) {
				document.querySelector("#topArrow").classList.add("!opacity-100", "!translate-y-0")
			} else {
				document.querySelector("#topArrow").classList.remove("!opacity-100", "!translate-y-0")
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
			<main className="flagsList grid gap-11 grid-cols-fill px-10 relative">
				{loading
					? <Loader />
					: <Cards countries={countries} MAX_PAGES={maxPages} setCountry={setCountry} getCountries={getCountries} />
				}
			</main>
			<MainFooter />
			<button onClick={() => scroll(0, 0)} id="topArrow" className='bg-verylightgray dark:bg-darkblue p-2 rounded-full fixed bottom-5 left-5 transition-all opacity-0 translate-y-12 hover:opacity-80 hover:scale-105 active:scale-95' title='Back to top'>
				<svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[30px]' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>
			</button>
		</>
	)
}

export default App
