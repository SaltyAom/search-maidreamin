import IInitState from "stores/types/initState"

const initState: IInitState = {
    guide: {
        isActive: true,
        version: 1
    },
    filter: {
        sortBy: "group",
        orderBy: "ascending"
    },
    order: [],
    menu: [],
    exchange: {
        serviceCharge: false
    }
}

export default initState