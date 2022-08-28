/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}", "./index.html"],
	theme: {
		extend: {
			gridTemplateColumns: {
				"fill": "repeat(auto-fill, minmax(250px, 1fr))"
			},
			fontFamily: {
				"nunito": ["Nunito Sans", "sans-serif"]
			},
			colors: {
				// 			- Dark Blue(Dark Mode Elements): hsl(209, 23 %, 22 %)
				"darkblue": "#2b3945",
				// 		- Very Dark Blue(Dark Mode Background): hsl(207, 26 %, 17 %)
				"verydarkblue": "#202c37",
				// 	- Very Dark Blue(Light Mode Text): hsl(200, 15 %, 8 %)
				"lightext": "#111517",
				// - Dark Gray(Light Mode Input): hsl(0, 0 %, 52 %)
				"darkgray": "#858585",
				// 	- Very Light Gray(Light Mode Background): hsl(0, 0 %, 98 %)
				"verylightgray": "#fafafa",
				// 		- White(Dark Mode Text & Light Mode Elements): hsl(0, 0 %, 100 %)
				"white": "#ffffff"
			},
			boxShadow: {
				"3xl": "-6px 6px 20px 3px rgb(0 0 0 / 15%);"
			}
		},
	},
	plugins: [],
	darkMode: 'class',
}