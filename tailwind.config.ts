/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        auction: {
          primary: '#4F46E5',     // Indigo
          secondary: '#8B5CF6',   // Violet
          accent: '#FBBF24',      // Gold
          dark: '#1F2937',        // Slate-800
          light: '#F3F4F6',       // Gray-100
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 12px rgba(139, 92, 246, 0.6)',
        'glow-md': '0 0 15px rgba(139, 92, 246, 0.7)',
        'glow-lg': '0 0 20px rgba(139, 92, 246, 0.8)',
      },
      animation: {
        pulseSlow: 'pulse 3s ease-in-out infinite',
        blob: 'blob 10s infinite',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animationDelay: {
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '2000': '2s',
        '4000': '4s',
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    require('tailwindcss-animate'),
  ],
};