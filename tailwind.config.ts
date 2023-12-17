import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff5ff',
          100: '#dce7fd',
          200: '#c1d6fc',
          300: '#96bdfa',
          400: '#659af5',
          500: '#4175f0',
          600: '#335de6',
          700: '#2343d2',
          800: '#2237ab',
          900: '#213487',
          950: '#192252',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#e0e0e0',
          300: '#c8c8c8',
          400: '#adadad',
          500: '#999999',
          600: '#888888',
          700: '#7b7b7b',
          800: '#676767',
          900: '#545454',
          950: '#363636',
        },
      },
    },
  },
  plugins: [],
};
export default config;
