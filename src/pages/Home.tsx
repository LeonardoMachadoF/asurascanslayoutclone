import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { ItemLatest } from "../components/ItemLatest"
import { ItemPopular } from "../components/ItemPopular"
import { MainHeaderHome } from "../components/MainHeaderHome"
import { PopularItens } from "../components/PopularItens"


export const Home = () => {
    const [list, setList] = useState<AxiosResponse<any, any>>()
    const [popularList, setPopularList] = useState<AxiosResponse<any, any>>()
    const [all, setAll] = useState<any>()


    useEffect(() => {
        let getList = async () => {
            let listReq = await axios.get('https://murmuring-reef-63947.herokuapp.com/api/novels?views=desc&take=2')
            setList(listReq.data.novels)
        }

        let getPopularList = async () => {
            let listReq = await axios.get('https://murmuring-reef-63947.herokuapp.com/api/novels?views=desc&skip=2')
            setPopularList(listReq.data.novels)
        }

        let setAllList = async () => {
            let listReq = await axios.get('https://murmuring-reef-63947.herokuapp.com/api/novels')
            setAll(listReq.data.novels)
        }

        getList();
        getPopularList();
        setAllList();
    }, [])

    return (
        <main className="flex-1 sm:m-6 overflow-hidden">
            {list
                ? <MainHeaderHome list={list} />
                : <div className="flex h-[300px] justify-between"></div>
            }

            {popularList
                ? <PopularItens list={popularList} />
                : <div className="h-[360px] bg-[#222222] mt-10 ">
                    <div className="font-bold pl-4 pt-2 pb-2 border-b-[1px] border-zinc-600"></div>
                </div>
            }



            <div className="bg-[#222222] mt-4">
                <div className="font-bold pl-4 pt-2 pb-2 border-b-[1px] border-zinc-600">Latest Update</div>
                <div className="flex flex-wrap justify-center">
                    {all &&
                        all.map((i: any) => (
                            <ItemLatest key={i.id} item={i} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}