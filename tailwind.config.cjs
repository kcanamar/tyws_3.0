/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: {
					950: "#272727ff"
				},
				brown: {
					950: "#EFD09EFF",
					1000: "#D4AA7DFF"
				},
				blue: {
					950: "#A6E1FAFF",
					1000: "#3C91E6FF"
				}
			},
		},
	},
	plugins: [],
}
