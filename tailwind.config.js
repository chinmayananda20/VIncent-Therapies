/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-5px)' },
          '40%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        shake: 'shake 0.4s ease-in-out',
      },
      fontFamily: {
        quicksand: ['"Noto Serif"', 'serif'],
        cursive:["Dancing Script", 'cursive'],
      },
    },
  },
  plugins: [],
}

