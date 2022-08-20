export default function Cards({ countries, MAX_PAGES }) {

	function handleCard(card) {
		console.log(card);
	}

	return countries.map((item, index) => {
		if (index < MAX_PAGES) {
			return (
				<article key={index + 105} className="countryCard" onClick={() => handleCard(item.name.common)} id={item.name.common}>
					<img src={item.flags.svg} alt={item.name.common + " flag"} />
					<h3>{item.name.common}</h3>
					<ul>
						<li>Population: {item.population}</li>
						<li>Region: {item.region}</li>
						<li>Capital: {item.capital || "Without name"}</li>
					</ul>
				</article>
			)
		}
	})
}