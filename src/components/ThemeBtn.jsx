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
			<svg xmlns="http://www.w3.org/2000/svg" fill={theme === "dark" ? "white" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`ml-[3px] absolute transition-all  duration-500 w-[18px] h-[18px] opacity-${theme === "dark" ? "0" : "100"}`} style={{ "transform": `rotate(${theme === "dark" ? "180deg" : "0deg"}=` }}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
			</svg>
			<svg className={`transition-all duration-500 scale-90 opacity-${theme === "dark" ? "100" : "0"}`} width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ "transform": `rotate(${theme === "dark" ? "180deg" : "0deg"}) scale(.9)` }}><path fillRule="evenodd" clipRule="evenodd" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM11 0h2v4.062a8.079 8.079 0 0 0-2 0V0ZM7.094 5.68 4.222 2.808 2.808 4.222 5.68 7.094A8.048 8.048 0 0 1 7.094 5.68ZM4.062 11H0v2h4.062a8.079 8.079 0 0 1 0-2Zm1.618 5.906-2.872 2.872 1.414 1.414 2.872-2.872a8.048 8.048 0 0 1-1.414-1.414ZM11 19.938V24h2v-4.062a8.069 8.069 0 0 1-2 0Zm5.906-1.618 2.872 2.872 1.414-1.414-2.872-2.872a8.048 8.048 0 0 1-1.414 1.414ZM19.938 13H24v-2h-4.062a8.069 8.069 0 0 1 0 2ZM18.32 7.094l2.872-2.872-1.414-1.414-2.872 2.872c.528.41 1.003.886 1.414 1.414Z" fill="currentColor" /></svg>
			{theme === "dark" ? 'Light Mode' : 'Dark Mode'}
		</button >
	)
}