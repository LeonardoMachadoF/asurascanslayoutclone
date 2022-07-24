import { Star } from "phosphor-react"
import { Link } from "react-router-dom"

export const ListItemAside = () => {
    return (
        <div className="xl:w-[100%]">
            <ul>
                <li className="flex items-center h-[100%] m-4">
                    <div className="border p-1 pl-2.5 pr-2.5 rounded border-zinc-600 mr-4">
                        1
                    </div>
                    <div>
                        <Link to="" className="w-[64px] block mr-2">
                            <img
                                src="https://www.asurascans.com/wp-content/uploads/2022/07/resource.jpg"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="w-[250px] h-[100%] flex flex-col justify-around">
                        <Link to='/' className="text-[15px] font-bold hover:text-purple-600 transition-all">Reaper of the Drifting Moon</Link>
                        <div className="text-zinc-300 text-sm">
                            <span className="text-zinc-50 flex flex-wrap gap-x-[3px]">
                                <span className="mr-1">Genres:</span>
                                <a className="hover:text-purple-600 transition-all" href="https://www.asurascans.com/genres/action/" rel="tag">Action,</a>
                                <a className="hover:text-purple-600 transition-all" href="https://www.asurascans.com/genres/adventure/" rel="tag">Adventure,</a>
                                <a className="hover:text-purple-600 transition-all" href="https://www.asurascans.com/genres/fantasy/" rel="tag">Fantasy,</a>
                                <a className="hover:text-purple-600 transition-all" href="https://www.asurascans.com/genres/shounen/" rel="tag">Shounen</a>
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