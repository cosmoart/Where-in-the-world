import { useState } from 'react';
import './App.css'

function App() {

	fetch("https://restcountries.com/v3.1/all")
		.then(res => res.json())
		.then(data => console.log(data));

	return (
		<div className="App">
			<h2>Hello World!</h2>
		</div>
	)
}

export default App
