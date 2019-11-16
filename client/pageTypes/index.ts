import { NextPage, NextPageContext } from 'next'
import { ApolloError } from '@apollo/react-hooks'

export interface IMaidreaminProps {
	initMenu: Array<IMenu>
}

export interface IMaidreaminContext extends NextPageContext {
	apolloClient: any
}

export interface IMaidreamin<P = {}, IP = P> extends NextPage {
	getInitialProps(ctx: IMaidreaminContext): Promise<IP>
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