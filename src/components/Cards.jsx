import { useEffect } from "react";

export default function Cards({ countries, MAX_PAGES, setCountry, getCountries }) {

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

	if (countries !== "Error" && !countries.message) {
		return countries.map((item, index) => {
			if (index < MAX_PAGES) {
				return (
					<figure key={index + 105} tabIndex="0" className="countryCard bg-white dark:bg-darkblue hover:!scale-105 transition-all rounded-md overflow-hidden cursor-pointer shadow-3xl opacity-40 translate-y-6 scale-75" id={"countryCard" + index} onClick={() => handleCard(item)}>
						<img src={item.flags.svg} alt={item.name.common + " flag"} className="h-1/2 object-cover w-full" />
						<section className="p-6 h-1/2">
							<figcaption>
								<h2 className="font-extrabold text-xl overflow-hidden max-h-[53px]">{item.name.common}</h2>
							</figcaption>
							<ul className="my-1">
								<li><b>Population:</b> {item.population.toLocaleString("en-US") || <i>No information</i>}</li>
								<li><b>Region:</b> {item.region || <i>No information</i>}</li>
								<li><b>Capital:</b> {item.capital || <i>No information</i>}</li>
							</ul>
						</section>
					</figure>
				)
			}
		})
	} else {
		return (
			<article className="absolute-center flex flex-col items-center gap-4">
				<svg className="w-[10rem] h-[5rem]" fill="#ff4848" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M23,7.44365081 L23,16.5563492 L16.5563492,23 L7.44365081,23 L1,16.5563492 L1,7.44365081 L7.44365081,1 L16.5563492,1 L23,7.44365081 Z M15.7279221,3 L8.27207794,3 L3,8.27207794 L3,15.7279221 L8.27207794,21 L15.7279221,21 L21,15.7279221 L21,8.27207794 L15.7279221,3 Z M12.0003283,17.9983464 C11.4478622,17.9983464 11,17.5506311 11,16.9983464 C11,16.4460616 11.4478622,15.9983464 12.0003283,15.9983464 C12.5527943,15.9983464 13.0006565,16.4460616 13.0006565,16.9983464 C13.0006565,17.5506311 12.5527943,17.9983464 12.0003283,17.9983464 Z M11.0029544,5.99834639 L13.0036109,5.99834639 L13.0036109,13.9983464 L11.0029544,13.9983464 L11.0029544,5.99834639 Z" fillRule="evenodd" /></svg>
				<h2 className="text-center text-xl font-extrabold">{countries.message || "Oops... Something is wrong"}</h2>
				<button className="dark:bg-darkblue py-2 px-6 rounded-sm hover:opacity-80 cursor-pointer" onClick={() => getCountries("https://restcountries.com/v3.1/all")}>Retry</button>
			</article>
		)
	}
}