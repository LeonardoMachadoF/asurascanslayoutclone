import { ActionReducerType } from "../../types/ActionReducerType"
import { UserType } from "../../types/UserType"

export type userInitialStateType = {
    user: UserType
}

export const userInitialState: userInitialStateType = {
    user: {
        name: '',
        surname: '',
        favorites: []
    }
}

export const userReducer = (state: userInitialStateType, action: ActionReducerType) => {
    switch (action.type) {
        case 'SETUSER':
            return state = action.payload
            break;
        case 'REMOVEUSER':
            return state = action.payload
            break;
    }
    return state
}