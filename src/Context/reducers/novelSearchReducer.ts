import { createContext } from "react"
import { ActionReducerType } from "../../types/ActionReducerType"

export type Novel = {
    artist: { [key: string]: string },
    author: { [key: string]: string },
    artist_id: string | null,
    author_id: string | null,
    id: string,
    title: string,
    slug: string,
    imagesUrl: string,
    rate: number | null,
    description: string | null,
    country_id: string | null,
    status: string,
    createdAt: Date,
    categories: {
        Category: {
            name: string,
            id: string
        }
    }[],
    origin: {
        name: string
    },
    views: number
}

export type NovelsInitialStateType = {
    novels: Novel[]
}

export const novelsSearchInitialState: NovelsInitialStateType = {
    novels: []
}

export const novelsSearchReducer = (state: NovelsInitialStateType, action: ActionReducerType) => {
    switch (action.type) {
        case 'SETNOVELSSEARCH':
            return { ...state, novels: action.payload }
            break;
        case 'RESETNOVELSSEARCH':
            return state = { ...state, novels: [] }
    }

    return state;
}
