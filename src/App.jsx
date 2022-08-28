import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import CountriesForm from './components/CountriesForm';
import CountryDetails from './components/CountryDetails';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Loader from "./components/Loader";
import Error404 from "./components/Error404"

function App() {
	const MAX_PAGES = 24;

	const [maxPages, setMaxPages] = useState(MAX_PAGES);

	const [loading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState("");

	function getCountries(url) {
		setLoading(true);
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setCountries(data)
				console.log(countries);
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
		window.onscroll = function (e) {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !busy) {
				setMaxPages(max => max + MAX_PAGES);
				busy = true;
				setTimeout(() => busy = false, 600);
			}
		}

		document.body.addEventListener('mousedown', function () {
			document.body.classList.add('using-mouse');
		});

		document.body.addEventListener('keydown', function (event) {
			if (event.key === "tab") {
				document.body.classList.remove('using-mouse');
			}
		});


	}, []);

	return (
		<>
			<MainHeader />
			{country && <CountryDetails country={country} setCountry={setCountry} />}
			<CountriesForm getCountries={getCountries} />
			<main className="flagsList grid gap-11 grid-cols-fill p-7 relative">
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
