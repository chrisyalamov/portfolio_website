/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        nonstick: { raw: "(hover: hover)" },
      }
    },
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
    }
  },
  plugins: [],
}
