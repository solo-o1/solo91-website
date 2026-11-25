/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        arabic: ['Alexandria', 'Tahoma', 'sans-serif'],
      },
      colors: {
        'ember-gold': '#c9973e',
        'ember-dark': '#0d0905',
        'ember-cream': '#f5f0e8',
        background: 'hsl(var(--c-background) / <alpha-value>)',
        foreground: 'hsl(var(--c-foreground) / <alpha-value>)',
        primary: { DEFAULT: 'hsl(var(--c-primary) / <alpha-value>)', foreground: 'hsl(var(--c-primary-foreground) / <alpha-value>)' },
        muted: { foreground: 'hsl(var(--c-muted-foreground) / <alpha-value>)' },
        border: 'hsl(var(--c-border) / <alpha-value>)',
        card: 'hsl(var(--c-card) / <alpha-value>)',
        accent: 'hsl(var(--c-primary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
