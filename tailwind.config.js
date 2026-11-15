module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        brand: {
          50: '#fdf2f7', 100: '#fce7f1', 200: '#fad0e4', 300: '#f7a9cd',
          400: '#f172ab', 500: '#e8468c', 600: '#E11D74', 700: '#be125d',
          800: '#9d134d', 900: '#831543',
        },
        sand: { 50: '#FAF6F3', 100: '#F3ECE6', 200: '#E6D9CE' },
        plum: { 900: '#160D14', 800: '#231420', 700: '#331D2E' }
      },
      keyframes: {
        shimmer: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(100%)' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-4px)' } },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 10px 25px -5px rgba(225, 29, 116, 0.45)' },
          '50%': { boxShadow: '0 12px 30px -2px rgba(225, 29, 116, 0.7)' }
        },
        whatsappGlow: {
          '0%, 100%': { boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.45)' },
          '50%': { boxShadow: '0 12px 30px -2px rgba(37, 211, 102, 0.7)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2.8s infinite',
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s infinite',
        whatsappGlow: 'whatsappGlow 3s infinite',
      }
    }
  }
}