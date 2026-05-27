/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          light: '#F9FAFB',
          gray: '#F3F4F6',
          orange: '#FF6700',
          'orange-dark': '#D45500',
          'orange-light': '#FF8533',
          'orange-pale': '#FFF2E8',
          'orange-soft': '#FFE0CC',
          blue: '#090F9E',
          'blue-dark': '#0397CC',
          'blue-darker': '#23155F',
          'blue-pale': '#E8E9F8',
          'blue-soft': '#C5C7F0',
          dark: '#111827',
          body: '#374151',
          muted: '#6B7280',
          subtle: '#9CA3AF',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px 0 rgba(0,0,0,0.12)',
        orange: '0 4px 24px 0 rgba(255,103,0,0.30)',
        'orange-lg': '0 8px 40px 0 rgba(255,103,0,0.45)',
        blue: '0 4px 24px 0 rgba(9,15,158,0.25)',
        navbar: '0 4px 28px 0 rgba(3,151,204,0.28)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.7s ease forwards',
        'slide-left': 'slideLeft 0.7s ease forwards',
        'slide-right': 'slideRight 0.7s ease forwards',
        'spin-slow': 'spin 25s linear infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(-32px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(32px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};
