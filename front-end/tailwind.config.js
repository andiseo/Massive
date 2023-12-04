/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins :['Poppins','sans-serif'],
      },
      fontWeight :{
        normal : 400,
        reguler : 300,
        medium : 600,
        bold :700,
      },
      
    },
  },
  plugins: [require("daisyui")],
}