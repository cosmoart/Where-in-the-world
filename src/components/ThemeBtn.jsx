import { useState } from "react";

export default function ThemeBtn() {
	const [theme, setTheme] = useState(localStorage.getItem("theme"));

	document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark")

	if (!localStorage.theme) {
		const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		localStorage.setItem("theme", defaultDark ? 'dark' : 'light');
		setTheme(localStorage.theme);
	}

	function handleThemeToggle() {
		document.documentElement.classList[theme === "dark" ? "remove" : "add"]("dark")
		localStorage.setItem("theme", theme === "dark" ? "light" : "dark")
		setTheme(localStorage.theme);
	}

	return (
		<button onClick={handleThemeToggle} className="hover:opacity-80 active:scale-95"> {theme === "dark" ? 'Light Mode' : 'Dark Mode'}</button >
	)
}