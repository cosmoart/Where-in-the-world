export default function Cards({ countries, MAX_PAGES }) {

	function handleCard(card) {
		console.log(card);
	}

	if (countries !== "Error") {
		return countries.map((item, index) => {

			if (index < MAX_PAGES) {
				return (
					<article key={index + 105} tabIndex="0" className="countryCard bg-white dark:bg-darkblue hover:scale-105 transition-all rounded-md overflow-hidden cursor-pointer shadow-3xl" onClick={() => handleCard(item.name.common)}>
						<img src={item.flags.svg} alt={item.name.common + " flag"} className="h-1/2 object-cover w-full" loading="lazy" />
						<section className="p-6 h-1/2">
							<h3 className="font-extrabold text-2xl my-3">{item.name.common}</h3>
							<ul>
								<li><b>Population:</b> {item.population.toLocaleString("en-US")}</li>
								<li><b>Region:</b> {item.region}</li>
								<li><b>Capital:</b> {item.capital || "Without name"}</li>
							</ul>
						</section>
					</article>
				)
			}
		})
	} else {
		return (
			<article className="absolute-center">
				<h2 className="text-center text-xl font-extrabold">Opps... Something is wrong</h2>
			</article>
		)
	}
}

// 1450 => 0541 => 054 1 => 1