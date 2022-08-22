import { useEffect, useState } from "react";

export default function useCountries(url) {
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