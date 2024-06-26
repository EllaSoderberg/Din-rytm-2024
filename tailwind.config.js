/** @type {import('tailwindcss').Config} */
let tinycolor = require("tinycolor2");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: {
        'layover-85': tinycolor('#4A5950').setAlpha(0.85).toRgbString(),
        'layover-75': tinycolor('#4A5950').setAlpha(0.75).toRgbString(),
        'layover-50': tinycolor('#4A5950').setAlpha(0.5).toRgbString(),
        'layover-25': tinycolor('#4A5950').setAlpha(0.25).toRgbString(),
        '600': '#4A5950',
        '500': '#798672',
        '400': '#85907E',
        '300': '#9DA698', 
        '200': '#B5BBB1',
        '100': '#D9DCD8'
      },
      red: {
        '600': '#D37757',
        '500': '#E2AE94',
        '400': '#E3B49D',
        '300': '#E6C2B0', 
        '200': '#E9CFC2',
        '100': '#EEE3DE'
      },
      black: '#000',
      white: '#fff', 
    },
    screens: {
        'xs': '420px',
        // => @media (min-width: 640px) { ... }
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '830px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      extend: {
        spacing: {
          xxl: '26rem'
        },
        maxWidth: {
          '7xl': "86rem"
        }
      },
  },
  
  variants: {
    cursor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
