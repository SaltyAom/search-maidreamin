const resolver = {
	Query: {
		getMenu: (_, __, { dataSources }) => {
            return dataSources.MaidreaminAPI.getMenu()
        },
        getMenuBy: (_, {name, price}, { dataSources }) => {
            return dataSources.MaidreaminAPI.getMenuBy({ name: name, price: price })
        }
	}
}

module.exports = resolver