import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import useCountries from './hooks/useCountries';

function App() {
	// console.log(this.context);
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

	function handleRegion(e) {
		console.log(e.target.value);
	}

	function handleSearch(e) {
		e.prevendDefault();
		console.log(e.target.value);
	}

	return (
		<>
			<header>
				<h1>Where in the World?</h1>
				<button>Dark Mode</button>
			</header>
			<form>
				<div>
					<input type="search" name="country" placeholder='Search for a country...' onChange={handleSearch} />
					<button aria-label='Search' onClick={handleSearch}></button>
				</div>
				<select name="region" onChange={handleRegion}>
					<option value="" defaultValue hidden>Filter by Region</option>
					<option value="africa">Africa</option>
					<option value="america">America</option>
					<option value="asia">Asia</option>
					<option value="europe">Europe</option>
					<option value="oceania">Oceania</option>
				</select>
			</form>
			{
				loading
					? <h1>Loading...</h1>
					: <div className="flagsList">
						<Cards countries={countries} MAX_PAGES={maxPages} />
					</div>
			}
		</>
	)
}

export default App
