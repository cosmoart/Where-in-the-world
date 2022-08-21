import { useState } from "react";

export default function ThemeBtn() {
	const [theme, setTheme] = useState(localStorage.getItem("theme"));
	console.log(theme);
	document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark")

	// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	// 	document.documentElement.classList.add('dark')
	// } else {
	// 	document.documentElement.classList.remove('dark')
	// }

	if (!localStorage.getItem("theme")) {
		const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		localStorage.setItem("theme", defaultDark ? 'dark' : 'light');
	}

	function handleThemeToggle() {
		document.documentElement.classList[theme === "dark" ? "remove" : "add"]("dark")
		localStorage.setItem("theme", theme === "dark" ? "light" : "dark")
		setTheme(localStorage.getItem("theme"));
	}

	return (
		<button onClick={handleThemeToggle}> {theme === "dark" ? 'Light Mode' : 'Dark Mode'}</button >
	)
}