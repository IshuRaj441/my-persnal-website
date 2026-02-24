/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        netflixRed: "#e50914",
        accentGlow: "rgba(229, 9, 20, 0.5)"
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(229, 9, 20, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(229, 9, 20, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      boxShadow: {
        'netflix-glow': '0 0 30px rgba(229, 9, 20, 0.6)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.8)',
        'glow-red': '0 0 60px rgba(229, 9, 20, 0.4)',
        'glassmorphism': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
