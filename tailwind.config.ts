import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A090C',
        'bg-subtle': '#0F0D12',
        surface: '#131118',
        'surface-raised': '#191620',
        gold: {
          DEFAULT: '#C47A65',
          light: '#D4947E',
          dim: '#A05C50',
          glow: 'rgba(196, 122, 101, 0.15)',
        },
        'rose-gold': '#C47A65',
        ink: {
          DEFAULT: '#F4EFE8',
          muted: '#C8BEB8',
          dim: '#AEA8A4',
        },
        line: {
          DEFAULT: '#1F1B14',
          gold: 'rgba(196, 122, 101, 0.2)',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'Georgia', 'sans-serif'],
      },
      fontSize: {
        'fluid-hero': 'clamp(2.75rem, 7vw, 5.5rem)',
        'fluid-xl': 'clamp(2rem, 4.5vw, 3.75rem)',
        'fluid-lg': 'clamp(1.6rem, 3vw, 2.5rem)',
        'fluid-md': 'clamp(1.25rem, 2vw, 1.75rem)',
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C47A65 0%, #D4947E 50%, #C47A65 100%)',
        'hero-glow': 'radial-gradient(ellipse at 75% 50%, rgba(196, 122, 101, 0.12) 0%, rgba(180, 90, 70, 0.06) 35%, transparent 65%)',
        'section-glow': 'radial-gradient(ellipse at 50% 100%, rgba(196, 122, 101, 0.08) 0%, transparent 60%)',
      },
      animation: {
        'draw-line': 'drawLine 1.2s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        drawLine: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
