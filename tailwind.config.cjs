/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}", "./index.html"],
	theme: {
		extend: {
			gridTemplateColumns: {
				"fill": "repeat(auto-fill, minmax(250px, 1fr))"
			},
			fontFamily: {
				"nunito": ["Nunito Sans", "ui-monospace", "SFMono-Regular"]
			},
			colors: {
				// 			- Dark Blue(Dark Mode Elements): hsl(209, 23 %, 22 %)
				"darkblue": "hsl(209, 23%, 22%)",
				// 		- Very Dark Blue(Dark Mode Background): hsl(207, 26 %, 17 %)
				"verydarkblue": "hsl(207, 26%, 17%)",
				// 	- Very Dark Blue(Light Mode Text): hsl(200, 15 %, 8 %)
				"lightext": "hsl(200, 15%, 8%)",
				// - Dark Gray(Light Mode Input): hsl(0, 0 %, 52 %)
				"darkgray": "hsl(0, 0%, 52%)",
				// 	- Very Light Gray(Light Mode Background): hsl(0, 0 %, 98 %)
				"verylightgray": "hsl(0, 0%, 98%)",
				// 		- White(Dark Mode Text & Light Mode Elements): hsl(0, 0 %, 100 %)
				"white": "hsl(0, 0%, 100%)"
			},
			boxShadow: {
				"3xl": "-6px 6px 20px 3px rgb(0 0 0 / 15%);"
			}
		},
	},
	plugins: [],
	darkMode: 'class',
}