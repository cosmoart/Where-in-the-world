import { useEffect, useState } from "react";

export default function CountryDetails({ country, setCountry, allCountries }) {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
		document.title = `${country.name.common} - Where in the World?`
		document.querySelector("link[rel~='icon']").href = country.flags.svg || "favicon.svg"
		history.pushState({ 'country_name': country.name.common }, "", country.name.common.replace(/ /ig, "-"));

		document.body.style.overflow = "hidden";
		document.getElementById("mainHeader").style.top = "0";
	}, [country])

	function handleBack() {
		setShow(false);
		setCountry("");
		document.title = `Where in the World?`;
		document.querySelector("link[rel~='icon']").href = "favicon.svg"
		history.pushState({ 'country_name': 0 }, "", "/");

		document.body.style.overflow = "auto";
		document.getElementById("mainHeader").style.top = "-200px";
	}

	let borders = country.borders ? country.borders.map(item => allCountries.find(i => i.cca3 === item)) : undefined

	return (
		<div className="fixed overflow-hidden w-full h-screen pointer-events-none z-20" >
			< section className={`absolute top-0 ${show ? "right-0" : "-right-full"} transition-all w-full bg-white dark:bg-verydarkblue pointer-events-auto h-full py-14 px-8 md:px-20 mt-[104px] sm:mt-16 overflow-auto`}>
				<button className="py-2 flex gap-3 px-6 mb-10 text-[15px] items-center dark:bg-darkblue rounded-[4px] hover:opacity-80 active:scale-95 shadow-lg" onClick={handleBack}>
					<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.328 11v2H7.5l3.243 3.243-1.415 1.414L3.672 12l5.656-5.657 1.415 1.414L7.5 11h12.828Z" fill="currentColor" /></svg>
					Back
				</button>
				<article className="sm:flex justify-between gap-6 items-center flex-col sm:flex-row w-full sm:max-h-[22rem]">
					<img src={country.flags.svg} alt={country.name.common + " flag"} className="sm:w-1/2 object-contain max-h-[22rem]" />
					<div className="sm:w-1/2 p-5">
						<h2 className="font-bold text-2xl my-8">{country.name.common}</h2>
						<ul className="sm:columns-2">
							<li className="my-1"><b>Native Name:</b> {country.name.nativeName && Object.values(country.name.nativeName)[0].common || <i>No information</i>} </li>
							<li className="my-1"><b>Population:</b> {country.population && country.population.toLocaleString("en-US") || <i>No information</i>} </li>
							<li className="my-1"><b>Region:</b> {country.region || <i>No information</i>} </li>
							<li className="my-1"><b>Sub Region:</b> {country.subregion || <i>No information</i>} </li>
							<li className="my-1"><b>Capital:</b> {country.capital && country.capital.join(", ") || <i>No information</i>}</li>
							<li className="my-1"><b>Top Level Domain: </b> {country.tld || <i>No information</i>}</li>
							<li className="my-1"><b>Corruencies:</b> {country.currencies && Object.keys(country.currencies) || <i>No information</i>} </li>
							<li className="my-1"><b>Languages:</b> {country.languages && Object.values(country.languages).join(", ") || <i>No information</i>}</li>
						</ul>
						<div className="flex gap-2 flex-wrap mt-10 mb-20 sm:mb-0">
							<b>Border Countries:</b>
							{borders
								? borders.map((item, index) =>
									<button key={index + 521} className="hover:opacity-80 active:scale-95 px-6 py-1 rounded-[4px] dark:bg-darkblue shadow-lg text-sm" onClick={() => setCountry(item)}>{item.name.common}</button>
								)
								: <i> No information</i>
							}
						</div>
					</div>
				</article>
			</section >
		</div >
	)
}