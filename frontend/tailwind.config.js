/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#007AFF',            // azul Apple-like
          surface: 'rgba(255,255,255,0.6)'
        },
        backdropBlur: {
          sm: '4px'
        }
      }
    },
    plugins: []
  }
  