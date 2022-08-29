import { useEffect } from "react";

export default function Cards({ countries, MAX_PAGES, setCountry }) {

	let observer = new IntersectionObserver(cards => {
		cards.forEach(card => {
			if (card.isIntersecting) card.target.classList.add("appear")
		})
	}, { threshold: 0.2 });

	useEffect(() => {
		document.querySelectorAll(".countryCard").forEach(card => observer.observe(card))
	}, [MAX_PAGES, countries]);

	function handleCard(card) {
		setCountry(card);
	}

	if (countries !== "Error") {
		return countries.map((item, index) => {

			if (index < MAX_PAGES) {
				return (
					<figure key={index + 105} tabIndex="0" className="countryCard bg-white dark:bg-darkblue hover:scale-105 transition-all rounded-md overflow-hidden cursor-pointer shadow-3xl opacity-40 translate-y-6 scale-75" id={"countryCard" + index} onClick={() => handleCard(item)}>
						<img src={item.flags.svg} alt={item.name.common + " flag"} className="h-1/2 object-cover w-full" />
						<section className="p-6 h-1/2">
							<figcaption>
								<h2 className="font-extrabold text-2xl my-3">{item.name.common}</h2>
							</figcaption>
							<ul>
								<li><b>Population:</b> {item.population.toLocaleString("en-US")}</li>
								<li><b>Region:</b> {item.region}</li>
								<li><b>Capital:</b> {item.capital || "Without name"}</li>
							</ul>
						</section>
					</figure>
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