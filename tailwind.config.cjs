/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
  variants: {
    extend: {
      transform: ["group-hover"],
      translate: ["group-hover"],
      border: ["first"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
      colors: {
        "content-dark": "#69707D",
        "content-darker": "#3D404A",
        danger: "#bd271e",
        "grey-blue": "#302F51",
        "grey-dark-shade": "#69707D",
        "grey-medium-shade": "#98A2B3",
        "shades-darkest": "#343741",
        "shade-light": "#d3dae6",
        "content-300": "#D8DCDE",
        "content-600": "#68737D",
        "content-800": "#2F3941",
      },
      keyframes:{
        shake:{
          "0%":{transform:'rotate(-1deg)'},
          "50%":{transform:'rotate(1deg)'},
          "100%":{transform:'rotate(-1deg)'}
        }
      },
      animation:{
        shake:"shake 0.5s infinite "
      }
    },
  },
};
