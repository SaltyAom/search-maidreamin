import React, { useState, useEffect, useContext, useLayoutEffect } from "react"

import { connect } from "react-redux"

import dynamic from "next/dynamic"

import { useLazyQuery } from "@apollo/react-hooks"

import { orderBy } from "lodash"
import { debounceTime, map } from "rxjs/operators"

import SearchLayout from "components/searchLayout"
import Card from "components/card"

import { GET_MENU, SEARCH_MENU, SEARCH_PRICE } from "libs/query"
import { isServer, search$, isBlank } from "libs/helpers"

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

const orderWith = (value, { sort, order }) => {
	let orderOptions = {
		ascending: "asc",
		descending: "desc"
	}

	if (sort === "group")
		return value

	let sortOptions = {
		name: "name.th",
		price: "price"
	}

	return orderBy(value, sortOptions[sort], orderOptions[order])
}

const Maidreamin: IMaidreamin = ({ props, store }: IMaidreaminProps) => {
	/**
	 * * Destructing
	 */
	let { initMenu } = props,
		{ filter } = store,
		{ sortBy, orderBy } = filter

	/**
	 * * Setup
	 * */
	let [search, setSearch] = useState<ISearch>(""),
		[isFetching, setFetching] = useState(false),
		[menus, setMenus] = useState<Array<IMenu>>(initMenu)

	let searchSubject$ = useContext(search$)

	/**
	 * * Apollo Query
	 * */
	let [requestSearch, searchData] =
		typeof search === "number"
			? useLazyQuery(SEARCH_PRICE, {
					variables: { price: search }
			  })
			: useLazyQuery(SEARCH_MENU, {
					variables: { name: search }
			  })

	let { data, loading, error }: ISearchData = searchData

	/**
	 * * Side effect
	 * */
	useEffect(() => {
		let debouncedSearch = searchSubject$.pipe(
			debounceTime(350),
			map(async (debounced: ISearch) => setSearch(debounced))
		)

		debouncedSearch.subscribe(
			async (debounced: any) => await requestSearch(debounced)
		)

		/**
		 * * Unsubscribe on unmount
		 * */
		return () => debouncedSearch.subscribe()
	}, [])

	if (!isServer) {
		useLayoutEffect(() => {
			if (typeof data !== "undefined")
				setMenus(
					orderWith(data.getMenu || data.getMenuBy, {
						sort: sortBy,
						order: orderBy
					})
				)

			if (search === "")
				setMenus(
					orderWith(initMenu, {
						sort: sortBy,
						order: orderBy
					})
				)
		}, [data])

		useLayoutEffect(() => {
			if (loading && typeof data !== "undefined")
				setTimeout(() => {
					if (loading && typeof data !== "undefined")
						setFetching(true)
				}, 350)
		}, [loading])

		useLayoutEffect(() => {
			setMenus(
				orderWith(
					typeof data !== "undefined"
						? data.getMenu || data.getMenuBy
						: initMenu,
					{
						sort: sortBy,
						order: orderBy
					}
				)
			)
		}, [sortBy, orderBy])
	}

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
	const apolloClient = ctx.apolloClient
	let initMenu = await apolloClient.query({
		query: GET_MENU
	})

	return { initMenu: initMenu.data.getMenu }
}

export default connect(mapStateToProps, mapDispatchToProps)(Maidreamin)
