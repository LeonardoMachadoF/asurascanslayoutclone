import { AxiosResponse } from "axios"
import { Link } from "react-router-dom"
import { PopularHeader } from "./PopularHeader"

type Props = {
    list: any
}

export const MainHeaderHome = ({ list }: Props) => {
    return (
        <div className="flex h-[300px] justify-between">
            {list && <PopularHeader item={list} />}

            <div className={`hidden xl:block w-[30%] overflow-hidden relative bg-slate-600 bg-[url('${list[1].imagesUrl}')] bg-center bg-cover`}>
                <img src={`${list[1].imagesUrl}`} className="absolute h-[100%] w-[100%]" alt="" />
                <div className="absolute bg-zinc-900 w-[100%] h-[100%] opacity-60"></div>
                <div className="absolute top-20 w-[100%]">
                    <p className="text-center mb-3">
                        <b>TRENDING</b> THIS WEEK
                    </p>
                    <Link to={`/${list[1].slug}`} className="text-xl p-4 w-[90%] absolute">
                        <strong className="w-[100%]">{list[1].title}</strong>
                    </Link>
                </div>
            </div>

        </div>
    )
}