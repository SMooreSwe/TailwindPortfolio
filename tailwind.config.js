/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'primary': '#02fcd4',
      'secondary': '#3c90a7',
      'buttons': '#e64c0e',
      'text': '#ffffff',
      'transparent': 'transparent',
    },
  },
  plugins: [],
}
