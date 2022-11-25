// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js, jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      80: ".80",
      85: ".85",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      full: "100%",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem", 
      xl: "36rem",
      full: "100%",
    },
    extend: {
      colors: {
        DarkBlue: "#1584b8",
        lightBlue: "#1584b8",
        normalBlue: "#6fafcc",
        orange: "#FF5533"
      },
      margin: {
        '-600': '-600px',
        '250': '250px',
        '200': '200px'
       },
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      niramit: ["Niramit", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      jost: ["Jost", "sans-serif"],
      calibri: ["Calibri"],
    },
    // backgroundImage: (theme) => ({
    //   "landing": "url('/images/c1.png')",     
    // }),
  },
  variants: {
    extend: {},
  },
};
