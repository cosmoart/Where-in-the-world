import { useEffect, useState } from "react";

export default function useCountries(url) {
	// https://restcountries.com/v3.1/region/{region}
	// https://restcountries.com/v3.1/name/{name}

	const [loading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setCountries(data))
			.catch(() => setCountries("Error"))
			.finally(() => setLoading(false));
	}, [url]);

	return [loading, countries];
}