/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070a12',
          900: '#0b1120',
          850: '#0f172a',
          800: '#151f38',
          700: '#1e2942',
        },
        accent: {
          cyan: '#06b6d4',
          sky: '#38bdf8',
          indigo: '#6366f1',
          violet: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-subtle': '0 0 25px -5px rgba(56, 189, 248, 0.15)',
        'glow-card': '0 4px 20px -2px rgba(15, 23, 42, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
