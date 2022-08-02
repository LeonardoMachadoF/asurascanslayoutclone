import axios from "axios"
import { Star } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context/Context"
import { DataRange } from "./DataRange"
import { ListItemAside } from "./ListItemAside"

export const Aside = () => {
    const [activeW, setActiveW] = useState<boolean>(true)
    const [activeM, setActiveM] = useState<boolean>(false);
    const [activeA, setActiveA] = useState<boolean>(false);
    const [all, setAll] = useState<any>();
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        let setAllList = async () => {
            if (state.novels.novels.length > 0) {
                setAll(state.novels.novels)
            } else {
                let listReq = await axios.get('https://murmuring-reef-63947.herokuapp.com/api/novels')
                dispatch({ type: 'SETNOVELS', payload: { novels: listReq.data.novels } });
                setAll(listReq.data.novels)
            }
        }
        setAllList()
    }, [])

    const handleRangeClick = (e: any) => {
        e.preventDefault()
        switch (e.target.innerHTML) {
            case 'Weekly':
                setActiveW(true);
                setActiveM(false);
                setActiveA(false);
                break;
            case 'Monthly':
                setActiveW(false);
                setActiveM(true);
                setActiveA(false);
                break;
            case 'All':
                setActiveW(false);
                setActiveM(false);
                setActiveA(true);
                break;

        }
    }


    return (
        <div className={`xl:w-[340px] h-[100%] max-w-[100%] bg-[#222] mt-10 m-auto xl:m-0 xl:mt-10`}>
            <div className="bg-[#333] p-2 rounded ml-2 mr-2">
                <ul className="flex w-[100%] justify-around m-auto text-sm">
                    <DataRange handleRangeClick={handleRangeClick} range='Weekly' active={activeW} />
                    <DataRange handleRangeClick={handleRangeClick} range='Monthly' active={activeM} />
                    <DataRange handleRangeClick={handleRangeClick} range='All' active={activeA} />
                </ul>
            </div>

            <div className="flex xl:block flex-wrap xl:flex-nowrap overflow-hidden">
                {all &&
                    all.map((i: any, k: number) => (
                        <ListItemAside key={k} item={i} k={k + 1} />
                    ))
                }
            </div>


        </div>
    )
}