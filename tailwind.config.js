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
        163: '40rem',
      },
      height: {
        38: '9.5rem'
      },
      backgroundSize: {
	      full: '100%'
      },
      minWidth: {
        4:'1rem'
      },
      minHeight: {
        4:'1rem'
      },
      backgroundColor: {
        trimmedWhite:'#e1e5e7',
        bitTrimmedWhite:'#f6f9f9'
      }
    },
  },
  plugins: [],
}
