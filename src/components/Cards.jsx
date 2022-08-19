export default function Cards({ countries, MAX_PAGES }) {
	return countries.map((item, index) => {
		if (index < MAX_PAGES) {
			return (
				<article key={index + 105}>
					<img src={item.flags.svg} alt={item.name.official + " flag"} />
					<h3>{item.name.official}</h3>
					<ul>
						<li>Population: {item.population}</li>
						<li>Region: {item.region}</li>
						<li>Capital: {item.capital[0]}</li>
					</ul>
				</article>
			)
		}
	})
}