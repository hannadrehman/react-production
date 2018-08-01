/* eslint-env node */
module.exports = (dist, proxy) => ({
  contentBase: dist,
  compress: true,
  port: 9000,
  historyApiFallback: true,
  hot: true,
  proxy: {
    changeOrigin: true,
    '/api/**': {
      target: proxy,
      secure: false,
      changeOrigin: true,
    },
    '/static/**': {
      target: proxy,
      secure: false,
      changeOrigin: true,
    },
  },
});
