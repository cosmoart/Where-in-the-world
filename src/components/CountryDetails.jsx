export default function CountryDetails(country) {
	console.log(country);
	return (
		<section>
			<button className="p-3 dark:bg-darkblue rounded-[4px] hover:opacity-80 active:scale-95">Back</button>
			<article className="flex justify-center gap-6 p-8 items-center flex-col sm:flex-row">
				<img src="src/assets/favicon/earth-icon.svg" alt="asd" className="sm:w-1/2" />
				<div className="sm:w-1/2 p-5">
					<h2 className="font-bold text-2xl my-8">Belgium</h2>
					<ul className="sm:columns-2">
						<li><b>Native Name:</b> </li>
						<li><b>Population:</b> </li>
						<li><b>Region:</b> </li>
						<li><b>Sub Region:</b> </li>
						<li><b>Capital:</b> </li>
						<li><b>Top Level Domain:</b> </li>
						<li><b>Corruencies:</b> </li>
						<li><b>Languages:</b> </li>
					</ul>
					<ul>
						Border Countries:
						<li className="p-4 rounded-[4px]"></li>
					</ul>
				</div>
			</article>
		</section>
	)
}