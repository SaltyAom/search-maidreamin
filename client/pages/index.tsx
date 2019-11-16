import React, { useState, useEffect, useContext, useLayoutEffect } from "react"

import dynamic from "next/dynamic"

import { useLazyQuery } from "@apollo/react-hooks"

import { debounceTime, map } from "rxjs/operators"

import SearchLayout from "components/searchLayout"
import Card from "components/card"

import { GET_MENU, SEARCH_MENU, SEARCH_PRICE } from "libs/query"
import { isServer, search$, isBlank } from "libs/helpers"

import { IMaidreamin, IMaidreaminProps, ISearch, IMenu, ISearchData } from "pageTypes"

const Error = dynamic(() => import("components/error"))
const Loading = dynamic(() => import("components/loading"))

const Maidreamin: IMaidreamin<IMaidreaminProps> = ({ initMenu }: IMaidreaminProps) => {
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
			map(async (debounced: ISearch) => setSearch(debounced)),
		)

		debouncedSearch.subscribe(
			async (debounced: any) => await requestSearch(debounced)
		)

		/** 
		 * ? Unsubscribe on unmount 
		 * */
		return () => debouncedSearch.subscribe()
	}, [])

	if (!isServer) {
		useLayoutEffect(() => {
			if (typeof data !== "undefined")
				setMenus(data.getMenu || data.getMenuBy)
			if (search === "") setMenus(initMenu)
		}, [data])

		useLayoutEffect(() => {
			if (loading && typeof data !== "undefined")
				setTimeout(() => {
					if (loading && typeof data !== "undefined")
						setFetching(true)
				}, 350)
		}, [loading])
	}

	/** 
	 * * Component 
	 * */
	if (isFetching) {
		if (!loading) setFetching(false)
		return(
			<SearchLayout
			onChange={event => searchSubject$.next(event.target.value)}
			value={search}
		>
			<Loading />
		</SearchLayout>
		)
	}

	if (error) return(
		<SearchLayout
			onChange={event => searchSubject$.next(event.target.value)}
			value={search}
		>
			<Error />
		</SearchLayout>
	)

	if (isBlank(menus))
		return (
			<SearchLayout
				onChange={event => searchSubject$.next(event.target.value)}
				value={search}
			>
				<Card th="Menu not found." en="ไม่พบเมนูนี้" />
			</SearchLayout>
		)

	return (
		<SearchLayout
			value={search}
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
 * ? SSR Request
 * */
Maidreamin.getInitialProps = async ctx => {
	const apolloClient = ctx.apolloClient
	let initMenu = await apolloClient.query({
		query: GET_MENU
	})

	return { initMenu: initMenu.data.getMenu }
}

export default Maidreamin