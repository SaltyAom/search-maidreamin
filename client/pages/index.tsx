import React, { useState, useRef, useEffect, useContext } from "react"

import { connect } from "react-redux"

import dynamic from "next/dynamic"

import { useLazyQuery } from "@apollo/react-hooks"

import { debounceTime, map, takeWhile } from "rxjs/operators"

import SearchLayout from "components/searchLayout"
import Card from "components/card"

import { GET_MENU, SEARCH_MENU, SEARCH_PRICE } from "libs/query"
import { search$, loading$, isBlank } from "libs/helpers"

import {
	IMaidreamin,
	IMaidreaminProps,
	ISearch,
	IMenu,
	ISearchData
} from "pageTypes"

const Error = dynamic(() => import("components/error"))
const Loading = dynamic(() => import("components/loading"))

const mapStateToProps = (state, ownProps) => ({
	store: {
		filter: {
			sortBy: state.filter.sortBy,
			orderBy: state.filter.orderBy
		}
	},
	props: ownProps
})

const mapDispatchToProps = null

export const Maidreamin: IMaidreamin = ({ props, store }: IMaidreaminProps) => {
	/**
	 * * Destructing
	 */
	let { initMenu } = props,
		{ filter } = store,
		{ sortBy, orderBy } = filter

	/**
	 * * Setup
	 * */
	let search = useRef<ISearch>(undefined),
		[isFetching, setFetching] = useState(false),
		[menus, setMenus] = useState<Array<IMenu>>(initMenu)

	let searchSubject$ = useContext(search$),
		loadSubject$ = useContext(loading$)

	/**
	 * * Apollo Query
	 * */
	let [requestSearch, searchData] =
		typeof search.current === "number"
			? useLazyQuery(SEARCH_PRICE, {
					variables: { price: search.current }
			  })
			: useLazyQuery(SEARCH_MENU, {
					variables: { name: search.current }
			  })

	let { data, loading, error }: ISearchData = searchData

	/**
	 * * Side effect
	 * */
	useEffect(() => {
		let debouncedSearch = searchSubject$.pipe(
			debounceTime(350),
			map(async (debounced: ISearch) => {
				search.current = debounced.toString().length
					? debounced
					: undefined
				return debounced
			})
		)

		debouncedSearch.subscribe(
			async (debounced: any) => {
				(await debounced !== "") 
					? await requestSearch()
					: setMenus(initMenu)
			}
		)

		let debouncedLoad = loadSubject$.pipe(
			debounceTime(400),
			takeWhile(isLoading => (!isLoading && isFetching) || (isLoading && !isFetching))
		)

		debouncedLoad.subscribe(() => setFetching(!isFetching))

		/* Unsubscribe on unmount */
		return () => debouncedSearch.subscribe()
	}, [])

	useEffect(() => {
		if (typeof search.current === "undefined") return

		let worker = require("libs/worker").default

		if (typeof data !== "undefined")
			worker
				.sortWith(
					typeof data !== "undefined"
						? data.getMenu || data.getMenuBy
						: initMenu,
					{
						sort: sortBy,
						order: orderBy
					}
				).then(res => setMenus(res))

		if (search.current === "")
			worker
				.sortWith(
					initMenu,
					{
						sort: sortBy,
						order: orderBy
					}
				).then(res => setMenus(res))
	}, [data])

	useEffect(() => {
		let worker = require("libs/worker").default

		worker
			.sortWith(
				typeof data !== "undefined"
					? data.getMenu || data.getMenuBy
					: initMenu,
				{
					sort: sortBy,
					order: orderBy
				}
			).then(res => setMenus(res))
	}, [sortBy, orderBy])

	useEffect(() => {
		loadSubject$.next(loading)
	}, [loading])

	/**
	 * * Component
	 * */
	if (isFetching) {
		if (!loading) setFetching(false)
		return (
			<SearchLayout
				onChange={event => searchSubject$.next(event.target.value)}
			>
				<Loading />
			</SearchLayout>
		)
	}

	if (error)
		return (
			<SearchLayout
				onChange={event => searchSubject$.next(event.target.value)}
			>
				<Error />
			</SearchLayout>
		)

	if (isBlank(menus))
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

/**
 * * SSR Request
 * */
Maidreamin.getInitialProps = async ctx => {
	let cache

	if(typeof cache !== "undefined")
		return { initMenu: cache }

	const apolloClient = ctx.apolloClient
	let initMenu = await apolloClient.query({
		query: GET_MENU
	})

	cache = initMenu
	return { initMenu: initMenu.data.getMenu }
}

export default connect(mapStateToProps, mapDispatchToProps)(Maidreamin)
