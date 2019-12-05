const path = require("path")
const withCSS = require("@zeit/next-css")
const withStylus = require("@zeit/next-stylus")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const withOffline = require("next-offline")
const withMinify = require("next-babel-minify")()
const withAnalyze = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
})
const withPlugins = require("next-compose-plugins")

module.exports = withPlugins(
	[
		[withAnalyze],
		[withCSS],
		[withStylus],
		[withMinify],
		[
			withOffline,
			{
				dontAutoRegisterSw: true,
				workboxOpts: {
					swDest: "static/service-worker.js",
					runtimeCaching: [
						{
							urlPattern: /.js$|.ttf$|.otf$|.css$|.svg$|.jpg$|.png$/,
							handler: "CacheFirst"
						}
					]
				}
			}
		]
	],
	{
		target: "serverless",
		exportPathMap: () => {
			return {
				"/": {
					page: "/"
				}
			}
		},
		target: "serverless",
		webpack(config, options) {
			config.optimization.minimize = true
			config.optimization.minimizer = []

			config.resolve.alias["react"] = "preact/compat"
			config.resolve.alias["react-dom"] = "preact/compat"
			config.resolve.alias["react-render-to-string"] =
				"preact-render-to-string"

			config.resolve.alias["pages"] = path.join(__dirname, "pages")
			config.resolve.alias["stylus"] = path.join(
				__dirname,
				"public/stylus"
			)
			config.resolve.alias["components"] = path.join(
				__dirname,
				"components"
			)
			config.resolve.alias["~"] = __dirname
			config.resolve.alias["libs"] = path.join(__dirname, "libs")
			config.resolve.alias["pageTypes"] = path.join(
				__dirname,
				"pageTypes"
			)

			config.resolve.alias["stores"] = path.join(__dirname, "stores")
			config.resolve.alias["workers"] = path.join(__dirname, "workers")
			config.resolve.alias["_next"] = path.join(__dirname, "_next/static")

			return config
		}
	}
)
