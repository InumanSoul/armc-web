/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-home': "url('/motorcycle.png')",
      },
    },
  },
  plugins: [],
}

