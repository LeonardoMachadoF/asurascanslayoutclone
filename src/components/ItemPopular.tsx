import { Star } from "phosphor-react"
import { Link } from "react-router-dom"

export const ItemPopular = () => {
    return (
        <div className="p-4 pt-5 min-w-[180px]">
            <div className="relative">
                <Link to='/'>
                    <img
                        src="https://www.asurascans.com/wp-content/uploads/2021/03/cover.jpg"
                        alt=""
                        className="w-32"
                    />
                </Link>
                <span className="absolute bottom-2 left-1 text-sm bg-red-800 rounded pl-1 pr-1">MANHWA</span>
            </div>
            <div className="w-[100%] text-sm mt-1">
                <Link to='/' className="font-bold mb-1 block hover:text-purple-600 transition-all cursor-pointer">Return of the Mount Hua Sect</Link>
                <a href="/" className="text-zinc-400 text-[12px]">Chapter 72</a>
                <div className="flex items-center">
                    <Star weight="fill" color="yellow" />
                    <Star weight="fill" color="yellow" />
                    <Star weight="fill" color="yellow" />
                    <Star weight="fill" color="yellow" />
                    <Star weight="fill" color="yellow" />
                    <small className="ml-1 mt-1">10</small>
                </div>
            </div>
        </div>
    )
}