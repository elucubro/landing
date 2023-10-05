/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      fontWeight: {
        'semibold': 600        
      },
      colors: {
        'background': '#000000',
        'text': '#d9fcee',
        'primary': '#0fc7db',
        'secondary': '#041734',
        'accent': '#156cef'
      },
      keyframes: {
        widen: {
          '0%': {width: '100%', border: '2px #3acfc0 solid'},
          '50%': {'border-radius': '0.75rem', 'border-left': '1px #3acfc0 solid', 'border-right': '0.5px #3acfc0 solid'},
          '100%': {width: '100vw', 'border-top': '2px #3acfc0 solid', 'border-top': '2px #3acfc0 solid', 'border-left': '0px #3acfc0 solid', 'border-right': '0px #3acfc0 solid', 'border-radius': '0rem'}
        }
      },
      animation: {
        widen: 'widen 5s forwards 1'
      }
    },
  },
  plugins: [],
}

