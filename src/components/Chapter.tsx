import { Link } from "react-router-dom"

type Props = {
    chapter: number
}

export const Chapter = ({ chapter }: Props) => {
    return (
        <div className="flex justify-between mt-1">
            <Link to='/' className="text-zinc-300 text-[14px] list-item ml-2">Chapter {chapter}</Link>
            <small className="text-zinc-400">3 hours ago</small>
        </div>
    )
}