export type ISortByOptions = "group" | "name" | "price"
export type IOrderOptions = "ascending" | "descending"

export default interface IInitState {
    filter: {
        isOpen: boolean,
        sortBy: ISortByOptions,
        orderBy: IOrderOptions
    }
}