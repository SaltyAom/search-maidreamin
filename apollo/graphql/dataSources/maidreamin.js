const { RESTDataSource } = require("apollo-datasource-rest")

class MaidreaminAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = "https://maidreamin.now.sh"
	}

	getMenuReducer(menu) {
		if (menu.name)
			return {
				name: {
					th: menu.name.th,
					en: menu.name.en,
					jp: menu.name.jp
				},
				price: menu.price
			}
		return {
			subMenu: menu["sub menu"],
			price: menu.price
		}
	}

	async getMenu() {
		let menu = await this.get("menu").then(d =>
			[].concat(...Object.values(d.data).map(Object.values))
		)
		return menu.map(menuData => this.getMenuReducer(menuData))
	}

	async getMenuBy({ name, price }) {
		let menu = await this.get("menu").then(d =>
			[].concat(...Object.values(d.data).map(Object.values))
		)
		let matchMenu = []
		if (name){
			await menu.map(data => {
				if (
					typeof menu["sub menu"] !== "undefined" &&
					menu["sub menu"].includes(name)
				)
					matchMenu.push({
						name: {
							th: undefined,
							en: name,
							jp: undefined
						},
						price: menu.price
					})
				if (
					typeof data.name !== "undefined" &&
					(data.name.th.toLocaleLowerCase().includes(name.toLocaleLowerCase()) ||
						data.name.en.toLocaleLowerCase().includes(name.toLocaleLowerCase()) ||
						data.name.jp.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
				) {
					matchMenu.push(data)
				}
			})
			return matchMenu
		} else {
			await menu.map(data => {
				if (typeof menu["sub menu"] !== "undefined" && data.price === price)
					matchMenu.push({
						subMenu: menu["sub menu"],
						price: menu.price
					})
				if (typeof data.name !== "undefined" && data.price === price) {
					matchMenu.push(data)
				}
			})
			return matchMenu
		}
	}
}

module.exports = MaidreaminAPI
