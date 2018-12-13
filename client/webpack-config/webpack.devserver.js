/* eslint-env node */
module.exports = (dist, proxy, stats, publicPath) => ({
  contentBase: dist,
  compress: true,
  port: 9000,
  historyApiFallback: true,
  hot: true,
  stats: stats ? 'errors-only' : true,
  overlay: true,
  publicPath,
  proxy: {
    changeOrigin: true,
    '/api/**': {
      target: proxy,
      secure: false,
      changeOrigin: true,
    },
    '/apiv2/**': {
      target: proxy,
      secure: false,
      changeOrigin: true,
    },
    '/static/**': {
      target: proxy,
      secure: false,
      changeOrigin: true,
      open: true,
    },
  },
});
