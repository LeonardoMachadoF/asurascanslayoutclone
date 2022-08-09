import { Star } from "phosphor-react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context/Context"

export const ItemPopular = ({ item }: any) => {
    const { state, dispatch } = useContext(Context)
    return (
        <div className={`p-4 pt-5 w-[164px]`}>
            <div>
                <div className="relative w-[128px]">
                    <Link to={`${item.slug}`} className="">
                        <img
                            src={`${item.imagesUrl}`}
                            alt=""
                            className="h-[172px]"
                        />
                    </Link>
                    <span className="absolute bottom-2 left-1 text-sm bg-red-800 rounded pl-1 pr-1">MANHWA</span>
                </div>
                <div className="w-[90%] text-sm mt-1">
                    <Link to={`/${item.slug}`} className="font-bold mb-1 block hover:text-purple-600 transition-all cursor-pointer pt-2 h-16">{item.title.substr(0, 45)}</Link>
                    <a href="/" className={`${state.theme.textColor} text-[12px]`}>Chapter 72</a>
                    <div className="flex items-center">
                        <Star weight="fill" color="orange" />
                        <Star weight="fill" color="orange" />
                        <Star weight="fill" color="orange" />
                        <Star weight="fill" color="orange" />
                        <Star weight="fill" color="orange" />
                        <small className="ml-1 mt-1">10</small>
                    </div>
                </div>
            </div>
        </div>
    )
}