/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '3rem'
        }
      },
      colors: {
        green: "#00b796",
        green1: "#0b736b",
        bgGreen: "#3d8e86",
        purple: "#3a00b7",
        yellow: "#f4ce14",
        royalBlue:"#4379f2",
        orange: "#ff6600",
        iris:"#604cc3",
        background:"#f5f7f8",
        background2:"#f5f5f5",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      },
      screens: {
        xs: '375px',  
        sm: '768px',
        md: '1060px', 
      },
      content: {
       view: "url(./assets/View.jpg)"
      }
    },
  },
  plugins: [],
}

