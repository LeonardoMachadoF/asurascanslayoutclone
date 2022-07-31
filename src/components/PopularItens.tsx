import { useRef, useState } from "react"
import { ItemPopular } from "./ItemPopular"

export const PopularItens = ({ list }: any) => {
    const carousel = useRef<any>(null);
    const [i, setI] = useState(0)

    const handleLeftClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault()
        if (i < -20) {
            setI(-40)
        } else {
            setI(i - 20)
        }
    }
    const handleRightClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault()
        if (i == 0) {
            setI(i * 0)
        } else {
            setI(i + 20)
        }

    }


    return (
        <div className="h-[360px] bg-[#222222] mt-10 w-[100%]">
            <div className="font-bold pl-4 pt-2 pb-2 border-b-[1px] border-zinc-600 ">Popular Today</div>
            <div className="block ">
                <div className={`flex w-[${164 * list.length}] ml-[${i}%]`} ref={carousel}>
                    {list.map((i: any) => (
                        <ItemPopular key={i.id} item={i} />
                    ))}
                </div>
                <div className="flex justify-between mt-[-200px] relative">
                    <span onClick={handleLeftClick} className="border p-2 pl-4 pr-4 rounded-full bg-zinc-800 bg-opacity-80 cursor-pointer">L</span>
                    <span onClick={handleRightClick} className="border p-2 pl-4 pr-4 rounded-full bg-zinc-800 bg-opacity-80 cursor-pointer">R</span>
                </div>
            </div>
        </div>
    )
}