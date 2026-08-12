import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        page: '#fbfbfd',
        surface: '#f3f3f8',
        ink: '#17181f',
        body: '#45475a',
        secondary: '#575a70',
        muted: '#9a9cb0',
        indigo: {
          DEFAULT: '#4550c7',
          hover: '#2e38a8',
        },
        teal: {
          DEFAULT: '#5eead4',
        },
        dark: {
          DEFAULT: '#17181f',
          card: '#1f2029',
          border: '#2c2d3a',
          body: '#b8bac8',
          text: '#f4f4f8',
        },
        line: '#e8e8ef',
        hairline: '#e0e0ea',
        outline: '#dcdde8',
      },
      fontFamily: {
        sans: ['Archivo', 'Helvetica', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};

export default config;
