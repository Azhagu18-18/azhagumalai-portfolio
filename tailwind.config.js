/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#070A12',
          secondary: '#0D1220',
          card: '#111827',
          cardHover: '#172033',
        },
        accent: {
          primary: '#756BFF',
          secondary: '#00D4FF',
          purple: '#8B5CF6',
          indigo: '#4F46E5',
          cyan: '#38BDF8',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#A1A1AA',
          muted: '#64748B',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.10)',
          glow: 'rgba(117, 107, 255, 0.35)',
          cyanGlow: 'rgba(0, 212, 255, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-electric': 'linear-gradient(135deg, #00D4FF 0%, #756BFF 100%)',
        'gradient-purple-indigo': 'linear-gradient(135deg, #8B5CF6 0%, #4F46E5 100%)',
        'gradient-glow': 'radial-gradient(circle at 50% 50%, rgba(117, 107, 255, 0.15) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 30px -5px rgba(117, 107, 255, 0.35)',
        'glow-secondary': '0 0 30px -5px rgba(0, 212, 255, 0.35)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(117, 107, 255, 0.15)',
        'glow-card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 35px -5px rgba(0, 212, 255, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
