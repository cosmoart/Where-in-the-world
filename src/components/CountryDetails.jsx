import { useEffect, useState } from "react";

export default function CountryDetails({ country }) {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true)
	}, [country])

	return (
		<div className="overflow-hidden w-full h-screen absolute pointer-events-none">
			<section className={`absolute top-0 ${show ? "right-0" : "-right-full"} transition-all w-full dark:bg-verydarkblue pointer-events-auto`}>
				<button className="p-3 dark:bg-darkblue rounded-[4px] hover:opacity-80 active:scale-95" onClick={() => setShow(false)}>Back</button>
				<article className="flex justify-center gap-6 p-8 items-center flex-col sm:flex-row">
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
						<ul>
							Border Countries:
							{country.borders
								? country.borders.map((item, index) => <li key={index + 521} className="p-4 rounded-[4px]">{item}</li>)
								: <i> No information</i>}
						</ul>
					</div>
				</article>
			</section>
		</div>
	)
}