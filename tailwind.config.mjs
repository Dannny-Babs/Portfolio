/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
                "tracking-in-expand": "tracking-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
				"fade-in-bottom": "fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both"
            },
            keyframes: {
                "tracking-in-expand": {
                    "0%": {
                        "letter-spacing": "-.5em",
                        opacity: "0"
                    },
                    "40%": {
                        opacity: ".6"
                    },
                    to: {
                        opacity: "1"
                    }
                },
				"fade-in-bottom": {
                    "0%": {
                        transform: "translateY(50px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1"
                    }
                }
            },
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
