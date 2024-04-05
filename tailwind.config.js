/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
          'neutralSilver': '#F5F7FA',
          'neutral0Grey': '#404040',
          'brandPrimary': '#4CAF4F',
          'neutralGrey': '#717171',
      }
    },
  },
  plugins: [],
}

