module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/url-shortening-api/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'URL Shortening API',
    },
  },
};
