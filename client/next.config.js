const path = require("path")
const withCSS = require("@zeit/next-css")
const withStylus = require("@zeit/next-stylus")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const withOffline = require("next-offline")
const withMinify = require("next-babel-minify")()

module.exports = withMinify(
	withCSS(
		withStylus(
			withOffline({
				target: "serverless",
				dontAutoRegisterSw: true,
				workboxOpts: {
					swDest: "static/service-worker.js",
					runtimeCaching: [
						{
							urlPattern: /.js$|.ttf$|.otf$|.css$/,
							handler: "CacheFirst"
						}
					]
				},
				exportPathMap: () => {
					return {
						"/": {
							page: "/"
						}
					}
				},
				target: "serverless",	
				webpack(config, options) {
					config.optimization.minimizer = []
					config.optimization.minimizer.push(
						new OptimizeCSSAssetsPlugin({})
					)
//					config.resolve.alias["react"] = "preact/compat"
//					config.resolve.alias["react-dom"] = "preact/compat"
					config.resolve.alias["react-render-to-string"] = "preact-render-to-string"

					config.resolve.alias["stylus"] = path.join(
						__dirname,
						"public/stylus"
					)
					config.resolve.alias["components"] = path.join(
						__dirname,
						"components"
					)
					config.resolve.alias["~"] = path.join(
						__dirname,
						"public"
					)
					config.resolve.alias["libs"] = path.join(__dirname, "libs")

					return config
				}
			})
		)
	)
)