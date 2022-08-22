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
		<button onClick={handleThemeToggle} className="relative hover:opacity-80 active:scale-95 flex gap-1">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={theme === "dark" ? "white" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
			{theme === "dark" ? 'Light Mode' : 'Dark Mode'}
		</button >
	)
}