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

			}
		},
	},
	plugins: [],
}
