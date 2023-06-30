/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lapis: "#006494",
        cerulean: "#247BA0",
        celestial: "#1B98E0",
        alice: "#E8F1F2",
      },
    },
  },
  plugins: [],
};
