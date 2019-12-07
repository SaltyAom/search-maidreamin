import { ReactNode } from 'react'

export interface ISearchLayoutProps {
	onChange: (event: any) => any
	value?: string | number
	children: ReactNode
}

export default interface ISearchLayout {
	props: ISearchLayoutProps
}