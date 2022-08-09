import { ActionReducerType } from "../../types/ActionReducerType"

export type themeInitialStateType = {
    mainColor: string,
    secondaryColor: string,
    textColor: string,
    iconColor: string,
    place: string
}

export const themeInitialState = {
    mainColor: 'bgmain',
    secondaryColor: 'bgsec',
    textColor: 'textcolora',
    iconColor: 'white',
    place: 'place2'
}

export const themeReducer = (state: themeInitialStateType, action: ActionReducerType) => {
    switch (action.type) {
        case 'CHANGETHEME':
            return { ...state, mainColor: 'bgsec2', secondaryColor: 'bge9', textColor: 'textcolorb', iconColor: 'black', place: 'place' }
            break
        case 'RETURNTHEME':
            return { ...state, mainColor: 'bgmain', secondaryColor: 'bgsec', textColor: 'textcolora', iconColor: 'white', place: 'place2' }
            break
    }
    return state
}