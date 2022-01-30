module.exports = {
  purge: [
    './src/*.js',
    './public/*.html',
    './src/components/*.jsx'
  ],
  content: [],
  theme: {
    extend: {
      width: {
        163: '40rem'
      },
      backgroundSize: {
	full: '100%'
      }
    },
  },
  plugins: [],
}
