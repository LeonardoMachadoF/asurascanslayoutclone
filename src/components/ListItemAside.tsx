import { Star } from "phosphor-react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context/Context"
import { Category } from "../types/CategoryType"
import { NovelType } from "../types/NovelType"

type Props = {
    item: NovelType;
    k: number
}

export const ListItemAside = ({ item, k }: Props) => {
    const { state, dispatch } = useContext(Context)
    return (
        <div className="xl:w-[100%] pt-2 pb-2">
            <ul>
                <li className="flex items-center h-[100%] sm:m-4">
                    <div className="border p-1 pl-2.5 pr-2.5 rounded border-zinc-600 mr-4">
                        {k}
                    </div>
                    <div>
                        <Link to={`/${item.slug}`} className="w-[64px] block mr-2">
                            <img
                                src={item.imagesUrl}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="sm:w-[200px] w-[100%] h-[100%] flex flex-col justify-around">
                        <Link to={`${item.slug}`} className="text-[15px] font-bold hover:text-purple-600 transition-all">{item.title}</Link>
                        <div className={`${state.theme.textColor} text-sm`}>
                            <span className=" flex flex-wrap gap-x-[3px]">
                                <span className="mr-1">Genres:</span>
                                {item.categories.map((i: Category, k: number) => {
                                    if (item.categories.length === k + 1) {
                                        return <a key={i.Category.id} href={`http://localhost:3500/api/novels?genre=${i.Category.id}`} rel="tag">{i.Category.name}</a>
                                    } else {
                                        return <a key={i.Category.id} href={`http://localhost:3500/api/novels?genre=${i.Category.id}`} rel="tag">{i.Category.name}, </a>
                                    }

                                })}
                            </span>
                        </div>
                        <div className="flex items-center">
                            <Star size={16} weight='fill' color="orange" />
                            <Star size={16} weight='fill' color="orange" />
                            <Star size={16} weight='fill' color="orange" />
                            <Star size={16} weight='fill' color="orange" />
                            <Star size={16} weight='fill' color="orange" />
                            <span className="ml-1 mt-1 text-sm">9.9</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}