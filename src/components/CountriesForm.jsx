import { useRef } from "react";
import useCountries from "../helpers/getCountries";

export default function CountriesForm() {
	const SearchInput = useRef();

	// https://restcountries.com/v3.1/all
	// https://restcountries.com/v3.1/region/{region}
	// https://restcountries.com/v3.1/name/{name}

	function handleRegion(e) {
		console.log(e.target.value);

	}

	function handleSearch(e) {
		console.log(SearchInput.current.value.trim());
	}

	function handleBtnSearch(e) {
		// e.prevendDefault();
	}

	return (
		<form className="flex justify-between p-4 sm:flex-row flex-col gap-2">
			<div className="relative sm:w-[45%]">
				<input ref={SearchInput} type="search" name="country" placeholder='Search for a country...' onChange={handleSearch} className="p-3 shadow-3xl pl-10 dark:bg-darkblue rounded-[4px] w-full" />
				<button type="button" aria-label='Search' onClick={handleBtnSearch} className="absolute left-3 top-2/4 -translate-y-1/2 hover:opacity-80 active:scale-95">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" /></svg>
				</button>
			</div>
			<select name="region" onChange={handleRegion} className="dark:bg-darkblue p-2 rounded-[4px]">
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