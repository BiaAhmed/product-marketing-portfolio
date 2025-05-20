/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  fontFamily: {
		sans: ['Jost', 'sans-serif'],
		serif: ['Crimson Text', 'serif'],
	  },
	  extend: {
		colors: {
		  theme: {
			sun: {
			  bg: '#f9f9f5',
			  bgAccent: '#f0f0ed',
			  border: '#e5e5e0',
			  text: '#1b1b1b',
			  textMuted: '#4a4a4a',
			  primary: '#ffdd6d',
			  primaryText: '#1b1b1b',
			  secondary: '#2c2c2c',
			  secondaryText: '#ffffff',
			  accent: '#ebca60',
			  accentText: '#1b1b1b',
			  neutral: '#1b1b1b',
			  neutralText: '#f9f9f5',
			  info: '#55d799',
			  success: '#60c878',
			  warning: '#ffdd6d',
			  error: '#ff4d4f',
			},
			moon: {
			  bg: '#050712',
			  bgAccent: '#18181b',
			  border: '#3d3d3d',
			  text: '#f9f9f5',
			  textMuted: '#cccccc',
			  primary: '#ffdd6d',
			  primaryText: '#1b1b1b',
			  secondary: '#f0f0ed',
			  secondaryText: '#1b1b1b',
			  accent: '#ebca60',
			  accentText: '#1b1b1b',
			  neutral: '#f9f9f5',
			  neutralText: '#1b1b1b',
			  info: '#55d799',
			  success: '#60c878',
			  warning: '#ffdd6d',
			  error: '#ff4d4f',
			},
		  },
		},
		borderRadius: {
		  button: '0.5rem',
		  box: '2rem',
		  badge: '0.5rem',
		},
		keyframes: {
		  scrollLeft: {
			'0%': { transform: 'translateX(0%)' },
			'100%': { transform: 'translateX(-100%)' },
		  },
		  scrollRight: {
			'0%': { transform: 'translateX(-100%)' },
			'100%': { transform: 'translateX(0%)' },
		  },
		},
		animation: {
		  'scroll-left': 'scrollLeft 100s linear infinite',
		  'scroll-right': 'scrollRight 30s linear infinite',
		},
	  },
	},
	plugins: [require('@tailwindcss/typography')],
  };
  