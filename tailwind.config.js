/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terracotta': '#C16E4F',
        'ocre': '#D4A574',
        'sable': '#F5E6D3',
        'beige': '#EDDCC8',
        'zellige': '#3D8B74',
        'majorelle': '#6A4C93',
        'gold': '#D4AF37',
      },
      fontFamily: {
        'elegant': ['Georgia', 'serif'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
