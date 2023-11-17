/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoSlab: ['var(--font-roboto-slab)'],
        robotoCondensed: ['var(--font-roboto-condensed)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        bounce: 'bounce 1.2s infinite',
        pulse: 'pulse 1.7s ease-in-out infinite'
      },
      keyframes: {
        bounce: {
          '0%, 100%': {transform: 'translateY(-10%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'},
          '50%': {transform: 'translateY(0)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'},
        },
        pulse: {
          '0%, 100%': {opacity: 1},
          '50%': {opacity:.85}
        }
      },
      screens: {
        'xs': '450px',
        'xxs': '320px'
      }
    },
  },
  plugins: [],
}