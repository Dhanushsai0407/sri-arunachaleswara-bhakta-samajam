/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sacred: {
          950: '#060810',
          900: '#0c101d',
          850: '#111728',
          800: '#172036',
          700: '#23304f',
          600: '#34456e',
          500: '#4e6598',
          400: '#7c95c7',
          300: '#a8bde4',
          200: '#cfdef7',
          100: '#eaf1fc',
          50: '#f5f8ff',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        kumkum: {
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
        }
      },
      fontFamily: {
        telugu: ['"Noto Sans Telugu"', 'sans-serif'],
        teluguSerif: ['"Noto Serif Telugu"', 'serif'],
        sacred: ['Cinzel', '"Noto Serif Telugu"', 'serif'],
        sans: ['Inter', '"Noto Sans Telugu"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 3s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.04)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        goldShimmer: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(245, 158, 11, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
