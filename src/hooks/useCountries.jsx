import { useState } from "react";

export default function useCountries() {
	const [loading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);

	fetch("https://restcountries.com/v3.1/all")
		.then(res => res.json())
		.then(data => setCountries(data))
		.catch(err => setCountries("Error"))
		.finally(() => setLoading(false));

	return { loading, countries };
}