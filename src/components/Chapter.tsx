import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context/Context"

type Props = {
    chapter: number
}

export const Chapter = ({ chapter }: Props) => {
    const { state, dispatch } = useContext(Context)
    return (
        <div className="flex justify-between mt-1">
            <Link to='/' className={`${state.theme.textColor} text-[14px] list-item ml-2 hover:text-zinc-100 transition-all`}>Chapter {chapter}</Link>
            <small className={`${state.theme.textColor}`}>3 hours ago</small>
        </div>
    )
}