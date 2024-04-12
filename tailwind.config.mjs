/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': 'var(--background)',
				'background-tint': 'var(--background-tint)',
				'red': 'var(--red)',
				'red-tint': 'var(--red-tint)',
				'purple': 'var(--purple)',
				'green': 'var(--green)',
				'talo-green-alt': 'var(--talo-green-alt)',
				'talo-green': 'var(--talo-green)',
				'belleful-yellow': 'var(--belleful-yellow)',
				'belleful-white': 'var(--belleful-white)',

			},
			fontFamily:{
				'nohemi': [
					'Nohemi',
					'Verdana',
					'sans-serif'
				],
				'humane': [
					'Humane',
					'Verdana',
					'sans-serif'
				]
			}
		},
	},
	plugins: [],
}
