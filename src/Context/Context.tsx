import React, { createContext, ReactNode, useReducer } from "react";
import { ActionReducerType } from "../types/ActionReducerType";
import { novelsInitialState, NovelsInitialStateType, novelsReducer } from "./reducers/novelsReducer";

type initialStateType = {
    novels: NovelsInitialStateType
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

type ChildrenType = {
    children: ReactNode
}

export const initialState: initialStateType = {
    novels: novelsInitialState
}

export const mainReducer = (state: initialStateType, action: ActionReducerType) => ({
    novels: novelsReducer(state.novels, action)
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