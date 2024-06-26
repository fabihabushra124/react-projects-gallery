/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        bouncy: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
          },
          '50%': {
            transform: 'translateY(0%)',
          },
        },
      },
      animation: {
        bouncy: 'bouncy 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
