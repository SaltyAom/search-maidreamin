import IGuideState, { TGuideAction } from 'stores/types/reducers/guide'

const guide:IGuideState = {
    isActive: true,
    version: 1
}

const guideReducer = (state: IGuideState = guide, action: TGuideAction) => {
    switch(action.type){
        case "UPDATE_GUIDE":
            return {
                ...state,
                isActive: action.payload.isActive
            }

        default:
            return state
    }
}

export default guideReducer