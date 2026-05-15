/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Premium cinematic color system
        'bg-primary': '#050816',
        'bg-secondary': '#0B1220',
        'surface': '#1A1F2E',
        'surface-elevated': '#252B3D',
        'text-primary': '#FFFFFF',
        'text-secondary': '#94A3B8',
        'text-muted': '#64748B',
        'accent': '#3B82F6',
        'accent-hover': '#2563EB',
        'accent-light': '#60A5FA',
        'primary-red': '#FF1E1E',
        'electric-blue': '#3B82F6',
        'glow-blue': 'rgba(59,130,246,0.3)',
        'glow-red': 'rgba(255,30,30,0.3)',
        'glow-purple': 'rgba(139,92,246,0.3)',
        'glow-green': 'rgba(34,197,94,0.3)',
        
        // Legacy support
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
        cinematic: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        // 🎬 Premium cinematic animations
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'magnetic': 'magnetic 0.3s ease-out',
        'liquid': 'liquid 0.4s ease-in-out',
        'cinematic-reveal': 'cinematicReveal 1.2s ease-out',
        'text-shimmer': 'textShimmer 3s linear infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'particle-float': 'particleFloat 4s ease-in-out infinite',
        'parallax-slow': 'parallaxSlow 20s linear infinite',
      },
      keyframes: {
        // 🎭 Enhanced keyframes
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-100px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3', scale: '1' },
          '50%': { opacity: '0.8', scale: '1.1' }
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        magnetic: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        },
        liquid: {
          '0%': { borderRadius: '12px' },
          '50%': { borderRadius: '20px' },
          '100%': { borderRadius: '12px' }
        },
        cinematicReveal: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(40px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)', filter: 'blur(0px)' }
        },
        textShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' }
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(59, 130, 246, 0.5)' },
          '50%': { borderColor: 'rgba(59, 130, 246, 0.8)' }
        },
        particleFloat: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
          '100%': { transform: 'translateY(0px) rotate(360deg)' }
        },
        parallaxSlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      boxShadow: {
        // 🌟 Premium shadow system
        'netflix-glow': '0 0 30px rgba(229, 9, 20, 0.6)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.3)',
        'glow-red': '0 0 60px rgba(255, 30, 30, 0.4)',
        'glassmorphism': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'cinematic-blue': '0 0 40px rgba(59, 130, 246, 0.3)',
        'cinematic-red': '0 0 40px rgba(255, 30, 30, 0.3)',
        'cinematic-purple': '0 0 40px rgba(139, 92, 246, 0.3)',
        'cinematic-green': '0 0 40px rgba(34, 197, 94, 0.3)',
        'glass-card': '0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-card-hover': '0 8px 40px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
        'neon-red': '0 0 20px rgba(255, 30, 30, 0.5), 0 0 40px rgba(255, 30, 30, 0.3)',
        'depth-1': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'depth-2': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'depth-3': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'depth-4': '0 16px 64px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backgroundSize: {
        '300%': '300%',
      },
      borderStyle: {
        'dashed-4': 'dashed 4px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}
