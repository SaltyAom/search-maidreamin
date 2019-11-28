export type ISortByOptions = "group" | "name" | "price"
export type IOrderOptions = "ascending" | "descending"

export default interface IInitState {
    guide: {
        isActive: boolean,
        version: number
    },
    filter: {
        isOpen: boolean,
        sortBy: ISortByOptions,
        orderBy: IOrderOptions
    }
}