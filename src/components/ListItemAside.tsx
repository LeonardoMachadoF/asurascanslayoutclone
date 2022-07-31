import { Star } from "phosphor-react"
import { Link } from "react-router-dom"

export const ListItemAside = ({ item, k }: any) => {
    return (
        <div className="xl:w-[100%] pt-2 pb-2">
            <ul>
                <li className="flex items-center h-[100%] sm:m-4">
                    <div className="border p-1 pl-2.5 pr-2.5 rounded border-zinc-600 mr-4">
                        {k}
                    </div>
                    <div>
                        <Link to="" className="w-[64px] block mr-2">
                            <img
                                src={item.imagesUrl}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="sm:w-[200px] w-[100%] h-[100%] flex flex-col justify-around">
                        <Link to={`${item.slug}`} className="text-[15px] font-bold hover:text-purple-600 transition-all">{item.title}</Link>
                        <div className="text-zinc-300 text-sm">
                            <span className="text-zinc-50 flex flex-wrap gap-x-[3px]">
                                <span className="mr-1">Genres:</span>
                                {item.categories.map((i: any, k: number) => {
                                    if (item.categories.length === k + 1) {
                                        return <a key={i.Category.id} href={`http://localhost:3500/api/novels?genre=${i.Category.id}`} rel="tag">{i.Category.name}</a>
                                    } else {
                                        return <a key={i.Category.id} href={`http://localhost:3500/api/novels?genre=${i.Category.id}`} rel="tag">{i.Category.name}, </a>
                                    }

                                })}
                            </span>
                        </div>
                        <div className="flex items-center">
                            <Star size={16} weight='fill' color="yellow" />
                            <Star size={16} weight='fill' color="yellow" />
                            <Star size={16} weight='fill' color="yellow" />
                            <Star size={16} weight='fill' color="yellow" />
                            <Star size={16} weight='fill' color="yellow" />
                            <span className="ml-1 mt-1 text-sm">9.9</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}