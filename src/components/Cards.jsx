import { useEffect } from "react";

export default function Cards({ countries, MAX_PAGES, setCountry, getCountries }) {

	let observer = new IntersectionObserver(cards => {
		cards.forEach(card => {
			if (card.isIntersecting) card.target.classList.add("appear")
		})
	}, { threshold: 0.2 });

	useEffect(() => {
		document.querySelectorAll(".countryCard").forEach(card => observer.observe(card));
	}, [MAX_PAGES, countries]);

	function handleCard(card) {
		setCountry(card);
	}

	if (countries === "notfound") return (
		<article className="absolute-center flex flex-col items-center gap-4">
			<svg style={{ "verticalAlign": "middle" }} width="50" height="50" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="m945.644 899.026-178.44-178.47c-1.134-1.137-2.585-1.641-3.815-2.555 58.733-68.859 94.376-158.03 94.376-255.624 0-217.741-176.577-394.35-394.35-394.35-217.772 0-394.35 176.608-394.35 394.35 0 34.792 4.952 68.322 13.406 100.464 10.22-15.584 36.712-52.365 52.55-59.237-1.703-13.532-2.839-27.221-2.839-41.227 0-182.917 148.315-331.265 331.265-331.265S794.71 279.46 794.71 462.377c0 143.771-91.759 265.812-219.728 311.644-6.089 25.96-15.93 50.72-29.335 73.747 65.64-14.006 125.321-44.097 174.433-86.301.914 1.199 1.419 2.648 2.524 3.784l178.469 178.375c12.334 12.397 32.269 12.397 44.602 0 12.332-12.27 12.332-32.267-.031-44.6zM480.417 541.36c-45.421-45.422-105.827-70.437-170.111-70.437-64.284 0-124.657 25.015-170.08 70.437C94.773 586.783 69.76 647.187 69.76 711.47c0 64.285 25.014 124.658 70.467 170.111 45.453 45.455 105.858 70.466 170.112 70.466h.03c64.254 0 124.66-25.045 170.08-70.466 45.422-45.388 70.437-105.826 70.437-170.111-.032-64.252-25.047-124.657-70.468-170.11zM435.815 836.98c-33.53 33.531-78.1 51.982-125.477 51.982-47.41 0-92.011-18.484-125.51-51.982-33.53-33.53-51.983-78.1-51.983-125.51 0-47.409 18.453-91.978 51.983-125.506 33.53-33.533 78.07-51.954 125.478-51.954 47.41 0 91.979 18.454 125.51 51.954 33.529 33.53 51.981 78.097 51.981 125.506 0 47.442-18.452 91.98-51.982 125.51zm-14.92-236.066c-12.333-12.336-32.268-12.336-44.601 0l-65.99 65.987-65.987-65.987c-12.333-12.336-32.268-12.336-44.6 0-12.335 12.333-12.335 32.267 0 44.602l65.986 65.986-65.987 65.988c-12.334 12.333-12.334 32.268 0 44.601a31.454 31.454 0 0 0 22.3 9.243c8.076 0 16.15-3.091 22.3-9.243l65.989-65.986 65.989 65.986a31.453 31.453 0 0 0 22.3 9.243c8.076 0 16.15-3.091 22.3-9.243 12.334-12.333 12.334-32.268 0-44.601l-65.986-65.988 65.987-65.986c12.302-12.303 12.302-32.27 0-44.602z" /></svg>
			<h2 className="text-lg font-semibold">No results found</h2>
		</article>
	)

	if (countries !== "Error" && !countries.message) {
		return countries.map((item, index) => {
			if (index < MAX_PAGES) {
				return (
					<figure key={index + 105} tabIndex="0" className="countryCard bg-white dark:bg-darkblue hover:!scale-105 transition-all rounded-md overflow-hidden cursor-pointer shadow-3xl opacity-40 translate-y-6 scale-75" id={"countryCard" + index} onClick={() => handleCard(item)}>
						<img src={item.flags.svg} alt={item.name.common + " flag"} className="h-1/2 object-cover w-full" />
						<section className="p-6 h-1/2">
							<figcaption>
								<h2 title={item.name.common} className="font-extrabold text-xl overflow-hidden max-h-[53px]">{item.name.common}</h2>
							</figcaption>
							<ul className="my-1">
								<li><b>Population:</b> {item.population.toLocaleString("en-US") || <i>No information</i>}</li>
								<li><b>Region:</b> {item.region || <i>No information</i>}</li>
								<li><b>Capital:</b> {Array.isArray(item.capital) ? item.capital.join(", ") : item.capital || <i>No information</i>}</li>
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