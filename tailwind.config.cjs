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
				"darkblue": "#2b3945",
				"verydarkblue": "#202c37",
				"lightext": "#111517",
				"darkgray": "#858585",
				"verylightgray": "#fafafa",
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