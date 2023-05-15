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
      'primary': '#19c0bd',
      'secondary': '#e47a9b',
      'buttons': '#f2532a',
      'text': '#ffffff',
      'transparent': 'transparent',
    },
  },
  plugins: [],
}
