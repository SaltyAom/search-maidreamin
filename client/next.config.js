const path = require("path")
const withStylus = require("@zeit/next-stylus")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
})

module.exports = withBundleAnalyzer(
	withStylus({
		exportPathMap: () => {
			return {
				"/": {
					page: "/"
				}
			}
		},
		target: "serverless",
		webpack(config, options) {
			config.resolve.alias["react"] = "preact/compat"
			config.resolve.alias["react-dom"] = "preact/compat"
			config.resolve.alias["stylus"] = path.join(
				__dirname,
				"static/stylus"
			)
			config.resolve.alias["components"] = path.join(
				__dirname,
				"components"
			)
			config.resolve.alias["static"] = path.join(__dirname, "static")

			return config
		}
	})
)
