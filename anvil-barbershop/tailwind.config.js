/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        anvilBackground: '#131313',
        anvilRed: '#ff0000',
        anvilLightRed: '#ff817e',
      },
    },
  },
  plugins: [],
}

