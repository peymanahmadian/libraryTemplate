const path = require('path')
const withTM = require("next-transpile-modules")(["react-reader", "epubjs"]);
module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['sanab.erbp.ir']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack:(config)=>{
    config.module.rules.unshift({
      test:/pdf\.worker\.(min\.)?js/,
      use:[
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });
    return config;
  }
})
