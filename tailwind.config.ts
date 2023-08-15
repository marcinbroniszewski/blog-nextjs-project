import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				'main-black': '#1b1b1b',
				lime: '#b8e900',
			},
			colors: {
				snow: '#f1f1f1',
				lime: '#b8e900',
			},
		},
	},
	plugins: [],
}
export default config
