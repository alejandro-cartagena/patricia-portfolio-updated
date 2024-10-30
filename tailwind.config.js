/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb',
        },
        "light-blue": {
          600: "#e5e7eb"
        }
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}

