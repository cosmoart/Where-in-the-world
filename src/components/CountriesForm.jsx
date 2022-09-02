import { useRef, useState } from "react";

export default function CountriesForm({ setCountries, allCountries }) {
	const SearchInput = useRef();
	const [queries, setQueries] = useState({ searchQuery: null, regionQuery: null });

	function handleRegion(e) {
		if (e.target.value === "all") {
			setQueries({ ...queries, regionQuery: null })
			return setCountries(allCountries)
		}
		setQueries({ ...queries, regionQuery: e.target.value });
		let countriesResult = allCountries.filter(country => country.region.toLowerCase().includes(e.target.value) && (queries.searchQuery ? country.name.common.toLowerCase().includes(queries.searchQuery) : true));
		setCountries(countriesResult);
	}

	function handleSearch() {
		setQueries({ ...queries, searchQuery: SearchInput.current.value.trim().toLowerCase() })
		if (SearchInput.current.value.trim()) {
			let countriesResult = allCountries.filter(country =>
				country.name.common.toLowerCase().includes(SearchInput.current.value.trim().toLowerCase()) && (queries.regionQuery ? country.region.toLowerCase().includes(queries.regionQuery) : true));
			if (countriesResult.length <= 0) return setCountries("notfound")
			setCountries(countriesResult);
		} else {
			setCountries(allCountries)
		}
	}

	function handleToggleIcon() {
		document.querySelector("#selectIcon").classList.toggle("rotate-90");
		document.addEventListener("click", (e) => {
			if (e.target.name !== "region") document.querySelector("#selectIcon").classList.remove("rotate-90")
		})
	}

	return (
		<form className="flex justify-between py-12 px-7 sm:px-16 quadHD:px-20 sm:flex-row flex-col gap-2">
			<div className="relative sm:w-[45%] sm:max-w-[30rem]">
				<input ref={SearchInput} type="search" name="country" placeholder='Search for a country...' onChange={handleSearch} className="px-3 py-4 h-full shadow-3xl pl-14 dark:bg-darkblue rounded-[4px] w-full sm:max-w-lg" disabled={allCountries[0] ? false : true} />
				<button type="button" aria-label='Search' onClick={handleSearch} className="absolute left-5 top-1/2 -translate-y-1/2 btnHover" disabled={allCountries[0] ? false : true}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" /></svg>
				</button>
			</div>
			<div className="relative shadow-3xl">
				<select name="region" onChange={handleRegion} className={`dark:bg-darkblue py-4 px-4 sm:w-48 rounded-[4px] appearance-none w-full h-full`} disabled={allCountries[0] ? false : true} onClick={handleToggleIcon}>
					<option defaultValue hidden>Filter by Region</option>
					<option value="all">All</option>
					<option value="africa">Africa</option>
					<option value="america">America</option>
					<option value="asia">Asia</option>
					<option value="europe">Europe</option>
					<option value="oceania">Oceania</option>
					<option value="antarctic">Antarctic</option>
				</select>
				<svg id="selectIcon" className="transition-transform absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" height="17" width="17" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 " /></svg>
			</div>
		</form >
	)
}