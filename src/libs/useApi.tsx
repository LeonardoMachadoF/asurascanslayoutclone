import axios from "axios"
import Cookies from "js-cookie";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { NovelsType } from "../types/NovelsType";
import { NovelType } from "../types/NovelType";

type NovelTypeResponse = {
    novel: NovelType;
    chapters: { id: string, title: string, slug: string, volume: number, number: number }[] | [];
    views: number
}

export const useApi = () => {
    const { dispatch } = useContext(Context);

    return {

        listAllNovels: async () => {
            let listReq = await axios.get<NovelsType>('https://murmuring-reef-63947.herokuapp.com/api/novels');
            return listReq.data
        },

        doLogin: async (email: string, password: string) => {
            let user = await axios.post("https://murmuring-reef-63947.herokuapp.com/api/user/login", { email, password })
            if (user.data.token) {
                Cookies.set('token', user.data.token);
                location.assign('/');
                return;
            }
            return false;
        },

        getUser: async () => {
            const session = Cookies.get('token');
            let user = await axios.get(`https://murmuring-reef-63947.herokuapp.com/api/user/${session}`)
            dispatch({ type: 'SETUSER', payload: { user: user.data } })
            return user.data;
        },

        doLogout: async () => {
            dispatch({ type: 'REMOVEUSER' });
            Cookies.remove('token')
            location.reload();
        },

        getSearchNovel: async (slug: string) => {
            let req = await axios.get<NovelsType>(`https://murmuring-reef-63947.herokuapp.com/api/novels?slug=${slug}`)
            if (req.data.novels) {
                dispatch({ type: 'SETNOVELSSEARCH', payload: req.data })
                return true;
            } else {
                return false;
            }
        },

        getNovel: async (slug: string) => {
            let listReq = await axios.get<NovelTypeResponse>(`https://murmuring-reef-63947.herokuapp.com/api/novel/${slug}`)
            return listReq.data
        }
    }
}