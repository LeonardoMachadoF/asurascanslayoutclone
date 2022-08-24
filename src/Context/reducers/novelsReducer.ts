import { ActionReducerType } from "../../types/ActionReducerType"
import { NovelsType } from "../../types/NovelsType"

export const novelsInitialState: NovelsType = {
    novels: []
}

export const novelsReducer = (state: NovelsType, action: ActionReducerType) => {
    switch (action.type) {
        case 'SETNOVELS':
            return state = action.payload
            break;
        case 'RESETNOVELS':
            return state = { ...state, novels: [] }
    }

    return state;
}
