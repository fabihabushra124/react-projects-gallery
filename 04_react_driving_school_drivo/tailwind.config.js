/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        showSpin: {
          from: {
            opacity: '0',
            transform: 'scaleY(0)',
          },
          to: {
            opacity: '1',
            transform: 'scaleY(1)',
          },
        },
        slidToRight: {
          from: {
            transform: 'translateX(-200%)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0%)',
            opacity: '1',
          },
        },
        slidToLeft: {
          from: {
            transform: 'translateX(200%)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0%)',
            opacity: '1',
          },
        },
        slidToTop: {
          from: {
            transform: 'translateY(200%)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0%)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
