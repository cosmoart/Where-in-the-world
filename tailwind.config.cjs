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
			screens: {
				"quadHD": "1400px"
			}
		},
	},
	plugins: [],
	darkMode: 'class',
}