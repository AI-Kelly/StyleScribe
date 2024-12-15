/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B46C1',
          dark: '#553C9A',
          light: '#9F7AEA',
        },
        secondary: {
          DEFAULT: '#319795',
          dark: '#2C7A7B',
          light: '#4FD1C5',
        },
        background: {
          light: '#F7FAFC',
          dark: '#1A202C',
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(107, 70, 193, 0.1), 0 2px 4px -1px rgba(107, 70, 193, 0.06)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}