import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./ui/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-color': '#fbc000',
				'accent-color': '#D0861F',
			},
			animation: {
				'pulse-slow': 'pulse 3s linear infinite',
				'bounce-slow': 'bounce 2s linear infinite',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
export default config;
