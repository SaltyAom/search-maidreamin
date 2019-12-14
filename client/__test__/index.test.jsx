import React from "react"
import { shallow } from "enzyme"

import { Maidreamin as SearchDreaminComponent } from "pages/index"
import { SearchLayout as SearchLayoutComponent } from "layouts/searchLayout"
import { UtilityLayout as UtilityLayoutComponent } from "layouts/utilityLayout"
import Card from "components/card"
import Fab from "components/fab"
import ErrorBoundary from "components/ErrorBoundary"

import initState from "stores/initState"
import reducers from "stores/reducers"

let SearchDreaminProps = {
	props: {
		name: {
			th: "TH",
			en: "EN",
			jp: "JP"
		},
		price: 199,
		subMenu: null
	},
	store: initState,
	dispatch: {
		updateMenu: () => null
	}
}

let SearchLayoutProps = {
	props: {
		onChange: () => null
	},
	store: {
		guide: {
			isActive: false
		}
	}
}

const SearchDreamin = <SearchDreaminComponent {...SearchDreaminProps} />
const SearchLayout = <SearchLayoutComponent {...SearchLayoutProps} />

describe("Search Dreamin", () => {
	it("contains Search Layout", () => {
		const app = shallow(SearchDreamin)

		expect(app.find(SearchLayout)).toBeTruthy()
	})

	it("contains cards", () => {
		const app = shallow(SearchDreamin)

		expect(app.find(<Card preload />)).toBeTruthy()
	})

	// it('contains Floating Action Button', () => {
	//     const layout = shallow(<UtilityLayoutComponent />)

	//     expect(layout.contains(<Fab />)).toBeTruthy()
	// })

	it("contains sort", () => {
		const app = shallow(SearchDreamin)

		expect(app.find("#search-tools")).toBeTruthy()
	})

	it("can be contained in Error Boundary", () => {
		const app = shallow(<ErrorBoundary>{SearchDreamin}</ErrorBoundary>)

		expect(app.contains(SearchDreamin)).toBeTruthy()
	})

	it("can dispatch sortBy", () => {
		let state = reducers(
			{
				filter: {
					sortBy: "group",
					orderBy: "ascending"
				},
				guide: {
					isActive: true,
					version: 1
				},
				order: [],
				menu: [],
				exchange: {
					serviceChange: false
				}
			},
			{
				type: "UPDATE_SORT_BY",
				payload: {
					filter: {
						sortBy: "name"
					}
				}
			}
		)

		expect(state).toEqual({
			filter: {
				sortBy: "name",
				orderBy: "ascending"
			},
			guide: {
				isActive: true,
				version: 1
			},
			order: [],
			menu: [],
			exchange: {
				serviceChange: false
			}
		})
	})

	it("can dispatch orderBy", () => {
		let state = reducers(
			{
				filter: {
					sortBy: "name",
					orderBy: "ascending"
				},
				guide: {
					isActive: true,
					version: 1
				},
				order: [],
				menu: [],
				exchange: {
					serviceChange: false
				}
			},
			{
				type: "UPDATE_ORDER_BY",
				payload: {
					filter: {
						orderBy: "descending"
					}
				}
			}
		)

		expect(state).toEqual({
			filter: {
				sortBy: "name",
				orderBy: "descending"
			},
			guide: {
				isActive: true,
				version: 1
			},
			order: [],
			menu: [],
			exchange: {
				serviceChange: false
			}
		})
	})
})
