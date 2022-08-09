import { useContext } from "react"
import { Context } from "../Context/Context"
import { ItemPopular } from "./ItemPopular"

export const PopularItens = ({ list }: any) => {
    const { state, dispatch } = useContext(Context)
    return (
        <div className={`h-[360px] ${state.theme.mainColor} mt-10 w-[100%]`}>
            <div className="font-bold pl-4 pt-2 pb-2 border-b-[1px] border-zinc-600 ">Popular Today</div>
            <div className="block ">
                <div className="flex overflow-x-scroll scrollHidden">
                    {list.map((i: any) => (
                        <ItemPopular key={i.id} item={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}