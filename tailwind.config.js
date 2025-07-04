/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       sans: ['Inter', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#111111',
        accent: '#3B82F6', // ✅ changed from yellow to Tailwind blue-500
        light: '#FAFAFA',
      }
    },
  },
  plugins: [],
};
