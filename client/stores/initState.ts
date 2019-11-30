import IInitState from "stores/types/initState"

const initState: IInitState = {
    guide: {
        isActive: true,
        version: 1
    },
    filter: {
        isOpen: false,
        sortBy: "group",
        orderBy: "ascending"
    },
    order: []
}

export default initState