import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'img_bg_hero': "url('../assets/bg-hero.png')"
			},
			colors: {
				'primary': '#9700ea'
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
};

export default config;