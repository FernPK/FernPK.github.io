import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#49729C',
        'primary-hover': '#3F6A9A',
        'primary-light': '#97B2CE',
        'header-text': '#314C68',
        'body-text-on-white': '#67727E',
        'body-text-on-blue': '#393F46',
        'header-highlight-on-blue': '#F7FBFC',
        'header-highlight-on-white': '#D1E6F0',
        'image-border-on-blue': '#E8F3F7',
        'image-border-on-white': '#E3E5E8',
        'container-blue': '#DAEBF3',
        'white-hover': '#F7FBFC',
      }
    },
  },
  plugins: [],
}
export default config
