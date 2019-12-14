/**
 * ? For testing
 */
import { IMenu } from 'pageTypes/index'

export type TSortByOptions = "group" | "name" | "price"
export type TOrderByOptions = "ascending" | "descending"

export default interface IInitState {
    guide: {
        isActive: boolean
        version: number
    }
    filter: {
        sortBy: TSortByOptions
        orderBy: TOrderByOptions
    }
    order: Array<IMenu>
    menu: Array<IMenu>,
    exchange: {
        serviceCharge: boolean
    }
}