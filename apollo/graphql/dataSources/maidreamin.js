const { RESTDataSource } = require("apollo-datasource-rest")

class MaidreaminAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = "https://maidreamin.now.sh"
	}

	getMenuReducer(menu) {
		if (menu.name)
			return JSON.parse(`{
				"name": {
					"th": "${menu.name.th}",
					"en": "${menu.name.en}",
					"jp": "${menu.name.jp}"
				},
				"price": "${menu.price}"
			}`)

		return JSON.parse(`{
			"subMenu": [
				${ menu['sub menu'].map(subMenu => `\"${subMenu}\"`) }
			],
			"price": ${menu.price}
		}`)
	}

	async getMenu() {
		let menu = await this.get("menu").then(menu =>
			[].concat(...Object.values(menu.data).map(Object.values))
		)
		return menu.map(menuData => this.getMenuReducer(menuData))
	}

	async getMenuBy({ name, price }) {
		let menu = await this.get("menu").then(menu =>
			[].concat(...Object.values(menu.data).map(Object.values))
		),
			matchMenu = []

		if (name)
			await menu.forEach(data => {
				if (
					typeof data["sub menu"] !== "undefined" && (
						data["sub menu"][0]
							.toLocaleLowerCase()
							.includes(name.toLocaleLowerCase()) ||
						data["sub menu"][1]
							.toLocaleLowerCase()
							.includes(name.toLocaleLowerCase()))
				)
					matchMenu.push(
						JSON.parse(`{
							"subMenu": [
								${ data['sub menu'].map(menu => `\"${menu}\"`) }
							],
							"price": ${data.price}
						}`)
					)

				if (
					typeof data.name !== "undefined" && (
					data.name.th
						.toLocaleLowerCase()
						.includes(name.toLocaleLowerCase()) ||
					data.name.en
						.toLocaleLowerCase()
						.includes(name.toLocaleLowerCase()) ||
					data.name.jp
						.toLocaleLowerCase()
						.includes(name.toLocaleLowerCase())
					)
				)
					matchMenu.push(data)

			})

		await menu.forEach(data => {
			if (
				typeof data["sub menu"] !== "undefined" &&
				data.price === price
			)
				JSON.parse(`{
					"subMenu": [
						${ data['sub menu'].map(menuData => `\"${menuData}\"`) }
					],
					"price": ${data.price}
				}`)
	

			if (typeof data.name !== "undefined" && data.price === price)
				matchMenu.push(data)
				
		})

		return matchMenu
	}
}

module.exports = MaidreaminAPI