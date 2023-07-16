/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
  theme: {
    screens: {
      'folding_mobile': {'min': '0px' , 'max': '319px'},
      'mobile': {'min': '320px' , 'max': '639px'},
      'tablet': {'min': '640px','max': '767px'},
      'tablet_large': {'min': '768px' , 'max': '1023px'},
      'laptops': {'min': '1024px' , 'max': '1279px'},
      'desktops': {'min': '1280px' , 'max': '1535px'},
      '4k_screens': {'min': '1536px'},
    },
    keyframes: {
      move: {
        '0%': { transform: 'translateX(0%)' },

        '15%': { transform: 'translateX(15%)' },
        '30%': { transform: 'translateX(30%)' },
        '45%': { transform: 'translateX(45%)' },
        '60%': { transform: 'translateX(60%)' },
        '75%': { transform: 'translateX(80%)' },
        '90%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
    animation: {
      'moving': 'move 8s linear infinite',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animated')],
}