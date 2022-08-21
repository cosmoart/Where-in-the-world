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
			}
		},
	},
	plugins: [],
	darkMode: 'class',
}