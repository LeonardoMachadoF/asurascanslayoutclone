import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { ItemLatest } from "../components/ItemLatest"
import { MainHeaderHome } from "../components/MainHeaderHome"
import { PopularItens } from "../components/PopularItens"
import { Context } from "../Context/Context"
import { NovelsType } from "../types/NovelsType"
import { NovelType } from "../types/NovelType"


export const Home = () => {
    const [all, setAll] = useState<NovelsType | undefined>()
    const [list, setList] = useState<NovelsType | undefined>()
    const [latest, setLatest] = useState<NovelsType | undefined>()

    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        let getList = async () => {
            if (state.novels.novels.length > 0) {
                setAll(state.novels)
            } else {
                let listReq = await axios.get<NovelsType>('https://murmuring-reef-63947.herokuapp.com/api/novels')
                dispatch({ type: 'SETNOVELS', payload: listReq.data })
                setAll(listReq.data);
            }
        }
        getList();
    }, [])

    useEffect(() => {
        const getPopularList = () => {
            if (all) {
                let copy: NovelType[] = [...all.novels];
                let listPopular = copy.sort((a: NovelType, b: NovelType) => a.views > b.views ? -1 : 1)
                setList({ novels: listPopular });
            }
        };
        getPopularList();
    }, [all])

    useEffect(() => {
        const getLatestList = () => {
            if (all) {
                let copy: NovelType[] = [...all.novels];
                let listLatest = copy.sort((a: NovelType, b: NovelType) => a.createdAt > b.createdAt ? -1 : 1);
                setLatest({ novels: listLatest });
            }
        };
        getLatestList();
    }, [all])


    return (
        <main className="flex-1 sm:m-6 overflow-hidden">
            {list
                ? <MainHeaderHome list={list.novels} />
                : <div className=" flex h-[300px] justify-between"></div>
            }

            {list
                ? <PopularItens list={list.novels} />
                : <div className={`h-[360px] ${state.theme.mainColor} mt-10`} >
                    <div className="font-bold pl-4 pt-2 pb-2 border-b-[1px] border-zinc-600"></div>
                </div>
            }

            <div className={`${state.theme.mainColor} mt-4`}>
                <div className="font-bold pl-4 pt-2 pb-2 border-b-[1px] border-zinc-600">Latest Update</div>
                <div className="flex flex-wrap justify-center">
                    {latest &&
                        latest.novels.map((i: NovelType) => (
                            <ItemLatest key={i.id} item={i} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}