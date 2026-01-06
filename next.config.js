/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  trailingSlash: true,
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/impress': { page: '/impress' },
      '/impressum': { page: '/impress' },
    }
  },
}
