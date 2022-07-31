import { Link } from "react-router-dom"
import { Chapter } from "./Chapter"

type Props = {
    item: any
}

export const ItemLatest = ({ item }: Props) => {
    return (
        <div className="p-4 pt-5 w-[96%] md:w-[48%] flex border-b-[1px] border-zinc-700">
            <div className="relative">
                <Link to={`/${item.slug}`}>
                    <img
                        src={item.imagesUrl}
                        alt=""
                        className="w-32"
                    />
                </Link>
            </div>
            <div className="w-[100%] text-sm ml-4 mt-1 flex flex-col">
                <Link to={`/${item.slug}`} className="font-bold mb-1 hover:text-purple-600 transition-all">{item.title}</Link>
                <Chapter chapter={93} />
                <Chapter chapter={92} />
                <Chapter chapter={91} />
            </div>
        </div>
    )
}