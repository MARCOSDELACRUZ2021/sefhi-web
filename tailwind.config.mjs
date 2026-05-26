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
          orange: '#F97316',
          'orange-dark': '#EA580C',
          'orange-light': '#FB923C',
          'orange-pale': '#FFF7ED',
          'orange-soft': '#FFEDD5',
          blue: '#2563EB',
          'blue-dark': '#1D4ED8',
          'blue-darker': '#1E3A8A',
          'blue-pale': '#EFF6FF',
          'blue-soft': '#DBEAFE',
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
        orange: '0 4px 24px 0 rgba(249,115,22,0.25)',
        'orange-lg': '0 8px 40px 0 rgba(249,115,22,0.35)',
        blue: '0 4px 24px 0 rgba(37,99,235,0.2)',
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
