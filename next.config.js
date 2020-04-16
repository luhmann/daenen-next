module.exports = {
  exportTrailingSlash: true,
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/impress': { page: '/impress' },
      '/impressum': { page: '/impress' },
    }
  },
}
