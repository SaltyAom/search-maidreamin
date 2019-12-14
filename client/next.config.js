const { join } = require("path")

const withCSS = require("@zeit/next-css")
const withStylus = require("@zeit/next-stylus")
const withOffline = require("next-offline")
const withMinify = require("next-babel-minify")()
const withAnalyze = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
})
const withPlugins = require("next-compose-plugins")

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

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
			config.optimization.minimizer = []
			config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))

			config.resolve.alias["react"] = "preact/compat"
			config.resolve.alias["react-dom"] = "preact/compat"
			config.resolve.alias["react-render-to-string"] =
				"preact-render-to-string"

			config.resolve.alias["pages"] = join(__dirname, "pages")
			config.resolve.alias["stylus"] = join(
				__dirname,
				"public/stylus"
			)
			config.resolve.alias["components"] = join(
				__dirname,
				"components"
			)
			config.resolve.alias["~"] = __dirname
			config.resolve.alias["libs"] = join(__dirname, "libs")
			config.resolve.alias["pageTypes"] = join(
				__dirname,
				"pageTypes"
			)

			config.resolve.alias["stores"] = join(__dirname, "stores")
			config.resolve.alias["workers"] = join(__dirname, "workers")
			config.resolve.alias["_next"] = join(__dirname, "_next/static")
			config.resolve.alias["layouts"] = join(__dirname, "layouts")

			return config
		}
	}
)
