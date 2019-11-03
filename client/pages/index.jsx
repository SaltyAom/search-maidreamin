import { Fragment, useState, useEffect, useContext, useLayoutEffect } from "react"

import dynamic from 'next/dynamic'

import { useLazyQuery } from "@apollo/react-hooks"

import { Subject } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators'

import SearchLayout from "components/searchLayout"
import Card from "components/card"

import { GET_MENU, SEARCH_MENU, SEARCH_PRICE } from 'libs/query'
import { isServer, search$, isBlank } from 'libs/helpers'

const Error = dynamic(() => import("components/error"))
const Loading = dynamic(() => import("components/loading"))

const Maidreamin = ({ initMenu }) => {
	/* Setup */
	let [search, setSearch] = useState(""),
		[isLoading, setLoading] = useState(false),
		[menus, setMenus] = useState(initMenu)

	let searchSubject$ = useContext(search$)

	/* Apollo Query */
	let [ requestSearch, { data, loading, error }] =
		!isNaN(parseInt(search), 10)
			? useLazyQuery(SEARCH_PRICE, {
					variables: { price: parseInt(search, 10) }
				})
			: useLazyQuery(SEARCH_MENU, {
					variables: { name: search }
				})

	/* Side effect */
	useEffect(() => {
		let debouncedSearch = searchSubject$
			.pipe(
				debounceTime(350),
				map(async debounced => {
					setSearch(debounced)
				})
			)

		debouncedSearch
			.subscribe(async (debounced) => await requestSearch(debounced))

		return () => debouncedSearch.unsubscribe()
	}, [])

	if(!isServer){
		useLayoutEffect(() => {
			if (typeof data !== "undefined") setMenus(data.getMenu || data.getMenuBy)
			if (search === "") setMenus(initMenu)
		}, [data])

		useLayoutEffect(() => {
			if (loading && typeof data !== "undefined")
				setTimeout(() => {
					if (loading && typeof data !== "undefined") setLoading(true)
				}, 350)
		}, [loading])
	}

	/* Component */
	if (isLoading) {
		if(!loading) return setLoading(false)
		return <Loading />
	}

	if (error) return <Error />

	if(isBlank(menus))
		return (
			<SearchLayout
				onChange={event => searchSubject$.next(event.target.value)}
			>
				<Card th="Menu not found." en="ไม่พบเมนูนี้" />
			</SearchLayout>
		)

	return (
		<SearchLayout
			onChange={event => searchSubject$.next(event.target.value)}
		>
			{menus.map((menu, index) => {
				if (menu.subMenu !== null)
					return (
						<Card
							key={index}
							subMenu={menu.subMenu}
							price={menu.price}
						/>
					)
				else
					return (
						<Card
							key={index}
							th={menu.name.th}
							en={menu.name.en}
							jp={menu.name.jp}
							price={menu.price}
						/>
					)
			})}
		</SearchLayout>
	)
}

/* SSR Request */
Maidreamin.getInitialProps = async (ctx) => {
	const apolloClient = ctx.apolloClient
	let initMenu = await apolloClient.query({
		query: GET_MENU
	})

	return { initMenu: initMenu.data.getMenu }
}

export default Maidreamin
