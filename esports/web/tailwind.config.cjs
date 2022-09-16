/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },

      backgroundImage: {
        galaxy: "url('/background.png')",
        duo: 'linear-gradient(89.86deg, #9572FC 10.08%, #43E7AD 65.94%, #E1D55D 100%)',
        game: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    },
  },
  plugins: [],
}
