import gql from "graphql-tag"

export const GET_MENU = gql`
	query getMenu {
		getMenu {
			name {
				th
				en
				jp
			}
			subMenu
			price
		}
	}
`

export const SEARCH_MENU = gql`
	query getMenuBy($name: String) {
		getMenuBy(name: $name) {
			name {
				th
				en
				jp
			}
			subMenu
			price
		}
	}
`

export const SEARCH_PRICE = gql`
	query getMenuBy($price: Int) {
		getMenuBy(price: $price) {
			name {
				th
				en
				jp
			}
			subMenu
			price
		}
	}
`