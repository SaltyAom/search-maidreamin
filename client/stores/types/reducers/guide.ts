export interface IUpdateGuide {
    type: "UPDATE_GUIDE",
    payload: {
        isActive: boolean
    }
}

export type TGuideAction = IUpdateGuide
export default interface IGuideState {
    isActive: boolean
    version: number
}