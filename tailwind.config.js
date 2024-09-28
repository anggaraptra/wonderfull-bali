/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        main: '#295943',
        second: '#1da868',
      },
    },
  },
  // plugins: [require('flowbite/plugin')],
  plugins: [],
};
