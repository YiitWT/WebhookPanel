/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#36393e',
        secondary: '#1f2225',
        text: '#c7d5db',
        seperator: '#237feb',
        danger: '#E0245E',
        warning: '#faa61a',
        success: '#43b581',
      },
    },
  },
  plugins: [],
}

