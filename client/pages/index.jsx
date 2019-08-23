import { Fragment, useState, useEffect, useRef } from "react"

import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

import SearchLayout from "components/searchLayout"
import Card from "components/card"

const GET_MENU = gql`
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

const SEARCH_MENU = gql`
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

const Maidreamin = () => {
	let [search, setSearch] = useState(""),
		[searchPlaceholder, setSearchPlaceholder] = useState("")

	let searchRef = useRef("")

	useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.onload = () => {
                navigator.serviceWorker.register('/static/service-worker.js', {
                    scope: "/"
                })
                .then(registration => {
                    console.info('Registered:', registration);
                }).catch(err => {
                    console.error('Registration failed: ', err);
                });
            }
        }
    }, []);

	useEffect(() => {
		let deferSearch = searchPlaceholder
		searchRef.current = deferSearch
		setTimeout(() => {
			if (deferSearch !== searchRef.current) return
			setSearch(deferSearch)
		}, 450)
	}, [searchPlaceholder])

	let { data, loading, error } =
		search === ""
			? useQuery(GET_MENU)
			: useQuery(SEARCH_MENU, {
					variables: { name: search }
			  })

	let menus = []
	if(typeof data !== "undefined"){
		menus = data.getMenu || data.getMenuBy
	}

	if (loading && typeof data !== "undefined") {
		return (
			<SearchLayout
				value={searchPlaceholder}
				onChange={event => setSearchPlaceholder(event.target.value)}
			>
				<Card preload />
				<Card preload />
				<Card preload />
				<Card preload />
			</SearchLayout>
		)
	}

	if (error) {
		return (
			<SearchLayout
				value={searchPlaceholder}
				onChange={event => setSearchPlaceholder(event.target.value)}
			>
				<Card th="Something went wrong." en="มีข้อผิดพลาดบางอย่าง" />
				<Card preload />
			</SearchLayout>
		)
	}

	return (
		<SearchLayout
			value={searchPlaceholder}
			onChange={event => setSearchPlaceholder(event.target.value)}
		>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js"></script>
			{typeof menus !== "undefined" ? (
				<Fragment>
					{typeof menus[0] === "undefined" ? (
						<Card th="Menu not found." en="ไม่พบเมนูนี้" />
					) : null}
					{menus.map((menu, index) => {
						if (menu.subMenu !== null) {
							return (
								<Card
									key={index}
									subMenu={menu.subMenu}
									price={menu.price}
								/>
							)
						} else {
							return (
								<Card
									key={index}
									th={menu.name.th}
									en={menu.name.en}
									jp={menu.name.jp}
									price={menu.price}
								/>
							)
						}
					})}
				</Fragment>
			) : null}
		</SearchLayout>
	)
}

export default Maidreamin
