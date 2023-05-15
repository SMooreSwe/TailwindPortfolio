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
      'secondary': '#209cee',
      'buttons': '#f2532a',
      'text': '#ffffff',
      'transparent': 'transparent',
    },
  },
  plugins: [],
}
