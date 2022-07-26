import React, { createContext, ReactNode, useReducer } from "react";
import { ActionReducerType } from "../types/ActionReducerType";
import { NovelsType } from "../types/NovelsType";
import { novelsSearchInitialState, novelsSearchReducer } from "./reducers/novelSearchReducer";
import { novelsInitialState, novelsReducer } from "./reducers/novelsReducer";
import { themeInitialState, themeInitialStateType, themeReducer } from "./reducers/themeReducer";
import { userInitialState, userInitialStateType, userReducer } from "./reducers/userReducer";

type initialStateType = {
    novels: NovelsType,
    theme: themeInitialStateType,
    user: userInitialStateType,
    novelsSearch: NovelsType
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

type ChildrenType = {
    children: ReactNode
}

export const initialState: initialStateType = {
    novels: novelsInitialState,
    theme: themeInitialState,
    user: userInitialState,
    novelsSearch: novelsSearchInitialState
}

export const mainReducer = (state: initialStateType, action: ActionReducerType) => ({
    novels: novelsReducer(state.novels, action),
    theme: themeReducer(state.theme, action),
    user: userReducer(state.user, action),
    novelsSearch: novelsSearchReducer(state.novelsSearch, action)
})

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

export const ContextProvider = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}