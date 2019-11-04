const resolver = {
	Query: {
		getMenu: (_, __, { dataSources }, info) => {
			info.cacheControl.setCacheHint({ maxAge: 86400, scope: "PUBLIC" })
            return dataSources.MaidreaminAPI.getMenu()
        },
        getMenuBy: (_, {name, price}, { dataSources }, info) => {
			info.cacheControl.setCacheHint({ maxAge: 86400, scope: "PUBLIC" })
            return dataSources.MaidreaminAPI.getMenuBy({ name: name, price: price })
        }
	}
}

module.exports = resolver