const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['sanab.erbp.ir']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}
