// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        scroll: 'scroll 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
