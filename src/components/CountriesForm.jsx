export default function CountriesForm() {
	function handleRegion(e) {
		console.log(e.target.value);
	}

	function handleSearch(e) {
		e.prevendDefault();
	}
	return (
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
	)
}