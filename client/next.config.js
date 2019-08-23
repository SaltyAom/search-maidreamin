const path = require("path")
const withStylus = require("@zeit/next-stylus")

module.exports = withStylus({
	exportPathMap: () => {
		return {
			"/": {
				page: "/"
			}
		}
	},
	target: "serverless",
	webpack(config, options) {
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
