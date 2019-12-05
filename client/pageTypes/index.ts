import { NextPage, NextPageContext } from 'next'
import { Dispatch } from 'redux'

import { ApolloError } from '@apollo/react-hooks'

import { ISortByOptions, IOrderOptions } from 'stores/types/initState'
import { TMenuAction } from "stores/types/reducers/menu"

export interface IMaidreamin<P = {}, IP = P> extends NextPage {
	getInitialProps(ctx: IMaidreaminContext): Promise<IP>
}

export interface IMaidreaminContext extends NextPageContext {
	apolloClient: any
}

export interface IMaidreaminProps {
	store: IMaidreaminStore
	props: IMaidreaminOwnProps
	dispatch: IMaidreaminDispatch
}

export interface IMaidreaminConnectProps {
	store: IMaidreaminStore
	props: IMaidreaminOwnProps
}

export interface IMaidreaminConnectDispatch {
	dispatch: IMaidreaminDispatch
}

export interface IMaidreaminOwnProps {
	initMenu: Array<IMenu>
}

export interface IMaidreaminStore {
	filter: {
		sortBy: ISortByOptions,
		orderBy: IOrderOptions
	},
	menuStore: Array<IMenu>
}

export interface IMaidreaminDispatch {
	updateMenu(menu: Array<IMenu>): Dispatch<TMenuAction>
}

export interface IMenu {
	name?: {
		th: string | null,
		en: string | null,
		jp: string | null
	}
	price: number,
	subMenu?: Array<string>
}

export interface ISearchData {
	data: {
		getMenu?: Array<IMenu>,
		getMenuBy?: Array<IMenu>
	},
	loading: boolean,
	error?: ApolloError
}

export type ISearch = string | number