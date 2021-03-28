module.exports = {
  target: "serverless",
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    })
    config.plugins.push(new webpack.IgnorePlugin(/^electron$/))

    return config
  },
}
