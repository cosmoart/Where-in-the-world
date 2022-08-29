import { useRef } from "react";

export default function CountriesForm({ setCountries, allCountries }) {
	const SearchInput = useRef();
	let SearchQuery = null;
	let RegionQuery = null;

	function handleRegion(e) {
		RegionQuery = e.target.value
		let countriesResult = allCountries.filter(country => country.region.toLowerCase().includes(e.target.value));
		setCountries(countriesResult);
	}

	function handleSearch(e) {
		SearchQuery = SearchInput.current.value.trim().toLowerCase()

		console.log(RegionQuery);
		console.log(RegionQuery ? "Evalua" : "True");
		if (SearchInput.current.value.trim()) {
			let countriesResult = allCountries.filter(country => country.name.common.toLowerCase().includes(SearchInput.current.value.trim().toLowerCase()) && (RegionQuery ? country.region.toLowerCase().includes(RegionQuery) : true))
			setCountries(countriesResult);
		} else {
			setCountries(allCountries);
		}
	}

	return (
		<form className="flex justify-between p-10 sm:flex-row flex-col gap-2">
			<div className="relative sm:w-[45%]">
				<input ref={SearchInput} type="search" name="country" placeholder='Search for a country...' onChange={handleSearch} className="p-3 shadow-3xl pl-14 dark:bg-darkblue rounded-[4px] w-full max-w-lg" disabled={allCountries[0] ? false : true} />
				<button type="button" aria-label='Search' onClick={handleSearch} className="absolute left-5 top-2/4 -translate-y-1/2 btnHover" disabled={allCountries[0] ? false : true}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" /></svg>
				</button>
			</div>
			<select name="region" onChange={handleRegion} className="dark:bg-darkblue p-2 rounded-[4px]" disabled={allCountries[0] ? false : true}>
				<option value="" defaultValue hidden>Filter by Region</option>
				<option value="africa">Africa</option>
				<option value="america">America</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
		</form>
	)
}