import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Libre+Baskerville', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'fade-out': 'fadeOut 2s ease-in-out',
        'move-in': 'moveIn 2s ease-in-out infinite',
        'fade-move': 'fadeMove 2s ease-in-out, moveIn 2s ease-in-out 2s infinite',
        'slide-up': 'slideUp 2s ease-in-out',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'an-skills': 'SkilLs 12s linear infinite',
        'an-skills2': 'SkilLs2 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translate(-50px)', opacity: 0 },
          '100%': { transform: 'translate(0)', opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        moveIn: {
          '0%': { transform: 'translate(0)' },
          '50%': { transform: 'translate(10px)' },
          '100%': { transform: 'translate(0)' },
        },
        fadeMove: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }, 
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        SkilLs: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0px, 450px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        SkilLs2: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-350px, 0px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },      
    },
  },
  plugins: [],
}