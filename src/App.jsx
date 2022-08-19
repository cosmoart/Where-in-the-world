import { useState } from 'react';
import './App.css';
import useCountries from './hooks/useCountries';

function App() {
	const info = useCountries();
	console.log(info);

	fetch("https://restcountries.com/v3.1/all")
		.then(res => res.json())
		.then(data => console.log(data));

	return (
		<div className="App">
			<h2>Hello World!</h2>
			{/* https://restcountries.com*/}
		</div>
	)
}

export default App
