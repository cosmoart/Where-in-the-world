export default function Cards({ countries, MAX_PAGES }) {
	let page = <></>
	console.log(countries);
	countries.map((item, index) => {
		if (index < MAX_PAGES) {
			return <div>
				<h3>{item.name.official}</h3>
				<ul>
					<li>Population: {item.population}</li>
					<li>Region: {item.region}</li>
					<li>Capital: {item.capital[0]}</li>
				</ul>
			</div>
		}
	})
}