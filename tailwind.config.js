/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content:[
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Proxima nova', 'system-ui'],
        'nunito': ['nunito', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'syne': ['Syne-Regular', 'sans-serif'],
        'body': ['"Open Sans"'],
      },
      animation: {
        spin: 'spin 20s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      container: {
        'center': true,
        'padding': '2rem',
      },
      colors:{
        ...colors,
        'white': '#FDFCFA',
        'off-white': '#F9F8F4',
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
