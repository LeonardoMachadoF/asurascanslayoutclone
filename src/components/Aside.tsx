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
        <div className="w-[340px] h-[1220px] bg-[#222] mt-10">
            <div className="bg-[#333] p-2 rounded ml-2 mr-2">
                <ul className="flex w-[300px] justify-around m-auto text-sm">
                    <DataRange handleRangeClick={handleRangeClick} range='Weekly' active={activeW} />
                    <DataRange handleRangeClick={handleRangeClick} range='Monthly' active={activeM} />
                    <DataRange handleRangeClick={handleRangeClick} range='All' active={activeA} />
                </ul>
            </div>

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
    )
}