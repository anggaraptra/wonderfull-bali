/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  darkMode: 'class',
  theme: {
    color: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      main: '#295943',
      secondary: '#1da868',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
