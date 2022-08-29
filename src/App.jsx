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
				console.log(window.scrollY, document.querySelector(".countryCard").offsetTop);
				setTimeout(() => busy = false, 600);
			}
			document.querySelectorAll(".countryCard").forEach(item => {
				if (window.scrollY >= item.offsetTop) item.style.outline = "4px solid red"
			})
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
					: <Cards countries={countries} MAX_PAGES={maxPages} setCountry={setCountry} />
				}
			</main>
			<MainFooter />
		</>
	)
}

export default App
