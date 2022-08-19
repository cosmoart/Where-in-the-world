import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

const ThemeContext = React.createContext('light');

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeContext.Provider value="dark">
		<App />
	</ThemeContext.Provider>
)
