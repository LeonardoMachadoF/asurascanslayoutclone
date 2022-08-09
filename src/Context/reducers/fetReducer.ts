import { List } from "phosphor-react"
import { ActionReducerType } from "../../types/ActionReducerType"

export type fetInitialStateType = {
    params: string
}

export const fetInitialState: fetInitialStateType = {
    params: '/'
}

export const fetReducer = (state: fetInitialStateType, action: ActionReducerType) => {
    switch (action.type) {
        case 'SETFET':
            return { ...state, params: action.payload }
            break;
    }

    return state;
}
