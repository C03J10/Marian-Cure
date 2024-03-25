/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      itim: ["Itim", "sans-serif"]
    },

    extend: {

      colors: {
        "white": "#fcfdff",
        "pinkie": "#E04B9B",
        "black": "#040629",
        'blu': {
          '50': '#f1fafe',
          '100': '#e1f4fd',
          '200': '#bde9fa',
          '300': '#83d8f6',
          '400': '#39c2ef',
          '500': '#18addf',
          '600': '#0b8cbe',
          '700': '#0a709a',
          '800': '#0d5e7f',
          '900': '#104e6a',
          '950': '#0b3246'
        }

      }
    },
  },
  plugins: [],
}

