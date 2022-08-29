import { useState } from "react";

export default function ThemeBtn() {
	const [theme, setTheme] = useState(localStorage.getItem("theme"));

	document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
	document.querySelector("meta[name='theme-color']").content = theme === "dark" ? "#2b3238" : "#ffffff"

	if (!localStorage.theme) {
		const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		localStorage.setItem("theme", defaultDark ? 'dark' : 'light');
		setTheme(localStorage.theme);
	}

	function handleThemeToggle() {
		document.documentElement.classList[theme === "dark" ? "remove" : "add"]("dark");
		document.querySelector("meta[name='theme-color']").content = theme === "dark" ? "#ffffff" : "#2b3238"
		localStorage.setItem("theme", theme === "dark" ? "light" : "dark")
		setTheme(localStorage.theme);
	}

	return (
		<button onClick={handleThemeToggle} className="relative hover:opacity-80 active:scale-95 flex gap-2 items-center">
			<svg xmlns="http://www.w3.org/2000/svg" fill={theme === "dark" ? "white" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="transition-transform duration-500 w-[18px] h-[18px]" style={{
				"transform": `rotate(${theme === "dark" ? "360deg" : "0deg"})`
			}}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
			</svg>
			{theme === "dark" ? 'Light Mode' : 'Dark Mode'}
		</button >
	)
}