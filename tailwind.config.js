/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/js/**/*.js"
  ],
  
  screens: {
    'sm': '576px',
    // => @media (min-width: 576px) { ... }

    'md': '960px',
    // => @media (min-width: 960px) { ... }

    'lg': '1440px',
    // => @media (min-width: 1440px) { ... }
  },
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'primary': '#0A0AF7',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [
    require("tw-elements/plugin.cjs")
  ],
}

