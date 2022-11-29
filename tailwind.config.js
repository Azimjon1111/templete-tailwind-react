// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js, jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// module.exports = {
//   darkMode: false, // or 'media' or 'class'
//   content: ["./src/**/*.{html,js, jsx}"],
//   theme: {
//     scale: {
//       0: "0",
//       25: ".25",
//       50: ".5",
//       75: ".75",
//       80: ".80",
//       85: ".85",
//       90: ".9",
//       95: ".95",
//       100: "1",
//       105: "1.05",
//       110: "1.1",
//       125: "1.25",
//       150: "1.5",
//       200: "2",
//     },
//     minWidth: {
//       0: "0",
//       "1/4": "25%",
//       "1/2": "50%",
//       "3/4": "75%",
//       xs: "20rem",
//       sm: "24rem",
//       md: "28rem",
//       lg: "32rem",
//       xl: "36rem",
//       full: "100%",
//     },
//     minHeight: {
//       0: "0",
//       "1/4": "25%",
//       "1/2": "50%",
//       "3/4": "75%",
//       xs: "20rem",
//       sm: "24rem",
//       md: "28rem",
//       lg: "32rem",
//       xl: "36rem",
//       full: "100%",
//     },
//     extend: {
//       colors: {
//         DarkBlue: "#1584b8",
//         lightBlue: "#1584b8",
//         normalBlue: "#6fafcc",
//         orange: "#FF5533"
//       },
//       margin: {
//         '-600': '-600px',
//         '250': '250px',
//         '200': '200px'
//        },
//     },
//     fontFamily: {
//       lora: ["Lora", "serif"],
//       niramit: ["Niramit", "sans-serif"],
//       montserrat: ["Montserrat", "sans-serif"],
//       jost: ["Jost", "sans-serif"],
//       calibri: ["Calibri"],
//     },
//     // backgroundImage: (theme) => ({
//     //   "landing": "url('/images/c1.png')",
//     // }),
//   },
//   variants: {
//     extend: {},
//   },
// };
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bermuda: "#78dcca",
        titleColor: "#85662b",
        itemColor: "#f0ebe1",
        contentColor: "#8b7f75",
        disabledBtnBg: "#e7e7e7",
        disabledBtnColor: "#8d919e",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(1,0,1,0)",
        "out-expo": "cubic-bezier(0, 1, 0, 1)",
      },
    },
  },
  plugins: [],
};
