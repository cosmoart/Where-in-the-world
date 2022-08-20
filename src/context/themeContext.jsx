import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");
	const handleTheme = (e) => setTheme(theme === "dark" ? "light" : "dark");
	const data = { theme, handleTheme };
	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}
export { ThemeProvider };
export default ThemeContext;