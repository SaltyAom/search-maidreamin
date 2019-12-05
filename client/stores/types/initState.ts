/**
 * ? For testing
 */
import { IMenu } from 'pageTypes/index'

export type ISortByOptions = "group" | "name" | "price"
export type IOrderOptions = "ascending" | "descending"

export default interface IInitState {
    guide: {
        isActive: boolean
        version: number
    }
    filter: {
        isOpen: boolean
        sortBy: ISortByOptions
        orderBy: IOrderOptions
    }
    order: Array<IMenu>
    menu: Array<IMenu>
}