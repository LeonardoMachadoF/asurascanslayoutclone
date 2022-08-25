import { ActionReducerType } from "../../types/ActionReducerType"
import { NovelsType } from "../../types/NovelsType"

export const novelsSearchInitialState: NovelsType = {
    novels: []
}

export const novelsSearchReducer = (state: NovelsType, action: ActionReducerType) => {
    switch (action.type) {
        case 'SETNOVELSSEARCH':
            return state = action.payload
            break;
        case 'RESETNOVELSSEARCH':
            return state = novelsSearchInitialState
    }

    return state;
}
