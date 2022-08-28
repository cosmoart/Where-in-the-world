import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CountryDetails({ country = "", setCountry }) {
	const [show, setShow] = useState(false);
	let { countryURL } = useParams();

	document.body.style.overflow = country === "" ? "auto" : "hidden";

	useEffect(() => {
		setShow(true);
		if (!countryURL) {
			document.title = `${country.name.common} - Where in the World?`
			document.querySelector("link[rel~='icon']").href = country.flags.svg || "src/assets/favicon/favicon.svg"
		}
		history.pushState({ 'country_name': country.name.common }, "", country.name.common.replace(/ /ig, "-"))
	}, [country])

	function handleBack() {
		setShow(false);
		document.title = `Where in the World?`;
		document.querySelector("link[rel~='icon']").href = "src/assets/favicon/favicon.svg"
		setCountry("");
		document.body.style.overflow = "auto";
		history.pushState({ 'country_name': 0 }, "", "/");
	}

	return (
		<>
			{!countryURL
				? <div className="fixed overflow-hidden w-full h-screen pointer-events-none z-20" >
					< section className={`absolute top-0 ${show ? "right-0" : "-right-full"} transition-all w-full dark:bg-verydarkblue pointer-events-auto h-full p-10 mt-16`
					}>
						<button className="p-3 dark:bg-darkblue rounded-[4px] hover:opacity-80 active:scale-95" onClick={handleBack}>Back</button>
						<article className="flex justify-center gap-6 items-center flex-col sm:flex-row max-w-6xl mx-auto">
							<img src={country.flags.svg} alt={country.name.common + " flag"} className="sm:w-1/2" />
							<div className="sm:w-1/2 p-5">
								<h2 className="font-bold text-2xl my-8">{country.name.common}</h2>
								<ul className="sm:columns-2">
									<li><b>Native Name:</b> {Object.values(country.name.nativeName)[0].common || <i>No information</i>} </li>
									<li><b>Population:</b> {country.population.toLocaleString("en-US") || <i>No information</i>} </li>
									<li><b>Region:</b> {country.region || <i>No information</i>} </li>
									<li><b>Sub Region:</b> {country.subregion || <i>No information</i>} </li>
									<li><b>Capital:</b> {country.capital.map((name) => name) || <i>No information</i>}</li>
									<li><b>Top Level Domain: </b> {country.tld || <i>No information</i>}</li>
									<li><b>Corruencies:</b> {Object.keys(country.currencies) || <i>No information</i>} </li>
									<li><b>Languages:</b> {Object.values(country.languages).join(", ") || <i>No information</i>}</li>
								</ul>
								<ul className="flex gap-2">
									Border Countries:
									{country.borders
										? country.borders.map((item, index) => <li key={index + 521} className="px-4 py-3 rounded-[4px] dark:bg-darkblue">{item}</li>)
										: <i> No information</i>}
								</ul>
							</div>
						</article>
					</section >
				</div >
				: <h1>{countryURL}</ h1>
			}
		</>
	)
}