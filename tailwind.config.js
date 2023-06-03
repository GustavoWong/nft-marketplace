/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: '#7879F1',
        gradientMain: '#13082A', 
        gradientMainR: '#261B5C', 
        background: '#1E1E1E',
        'text-gray': '#9F8FC1',
      }
    },
  },
  plugins: [],
}