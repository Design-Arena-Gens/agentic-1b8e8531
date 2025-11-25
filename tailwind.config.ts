import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#0f766e',
          light: '#14b8a6',
          dark: '#0f4c45'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)']
      }
    }
  },
  plugins: []
};

export default config;
