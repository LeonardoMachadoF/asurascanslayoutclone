import { useContext } from "react"
import { Context } from "../Context/Context"
import { NovelType } from "../types/NovelType"
import { ItemPopular } from "./ItemPopular"

type Props = {
    list: NovelType[]
}

export const PopularItens = ({ list }: Props) => {
    const { state, dispatch } = useContext(Context)
    return (
        <div className={`h-[360px] ${state.theme.mainColor} mt-10 w-[100%]`}>
            <div className="font-bold pl-4 pt-2 pb-2 border-b-[1px] border-zinc-600 ">Popular Today</div>
            <div className="block ">
                <div className="flex overflow-x-scroll scrollHidden">
                    {list.map((i: NovelType, k: number) => (
                        k > 1 ? <ItemPopular key={i.id} item={i} /> : ''
                    ))}
                </div>
            </div>
        </div>
    )
}