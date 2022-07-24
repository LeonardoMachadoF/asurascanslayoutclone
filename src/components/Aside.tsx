import { Star } from "phosphor-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { DataRange } from "./DataRange"
import { ListItemAside } from "./ListItemAside"

export const Aside = () => {
    const [activeW, setActiveW] = useState<boolean>(true)
    const [activeM, setActiveM] = useState<boolean>(false);
    const [activeA, setActiveA] = useState<boolean>(false);

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
        <div className="xl:w-[340px] max-w-[100%] h-[1300px] bg-[#222] mt-10 m-auto xl:m-0 xl:mt-10">
            <div className="bg-[#333] p-2 rounded ml-2 mr-2">
                <ul className="flex w-[100%] justify-around m-auto text-sm">
                    <DataRange handleRangeClick={handleRangeClick} range='Weekly' active={activeW} />
                    <DataRange handleRangeClick={handleRangeClick} range='Monthly' active={activeM} />
                    <DataRange handleRangeClick={handleRangeClick} range='All' active={activeA} />
                </ul>
            </div>

            <div className="flex xl:block flex-wrap xl:flex-nowrap overflow-hidden">
                <ListItemAside />
                <ListItemAside />
                <ListItemAside />
                <ListItemAside />
                <ListItemAside />
                <ListItemAside />
                <ListItemAside />
                <ListItemAside />
                <ListItemAside />
                <ListItemAside />
            </div>


        </div>
    )
}