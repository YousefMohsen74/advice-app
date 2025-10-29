/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
 	  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'nav':"rgba(255, 255, 255, .1)",
      'white':'#fff',
      'black':"#000",
      'border':"rgba(238, 228, 228, 0.174)",
      'navmob':"rgb(35, 35, 35)"
    }
  },
  plugins: [],
}

