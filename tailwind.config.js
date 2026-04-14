// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//        sans: ['Inter', 'sans-serif'],
//       heading: ['Poppins', 'sans-serif'],
//       },
//       colors: {
//         primary: '#111111',
//         accent: '#111111', 
//         light: '#FAFAFA',
//       }
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY TURQUOISE COLORS
        primary: {
          50: '#E0F7F4',      // Light turquoise (use for backgrounds)
          100: '#C1EDE8',
          500: '#1D9E75',     // Main turquoise (use for buttons, accents)
          600: '#0F6E56',     // Dark turquoise (use for hover states)
          700: '#0A5745',
          900: '#042C2A',
        },
        
        // NEUTRAL COLORS
        neutral: {
          0: '#FFFFFF',
          50: '#F9F9F9',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D3D3D3',
          500: '#999999',
          700: '#666666',
          900: '#333333',
        },
      },
    },
  },
  plugins: [],
}