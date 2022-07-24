import { Link } from "react-router-dom"
import { Chapter } from "./Chapter"

export const ItemLatest = () => {
    return (
        <div className="p-4 pt-5 w-[48%] flex border-b-[1px] border-zinc-700">
            <div className="relative">
                <Link to='/'>
                    <img
                        src="https://www.asurascans.com/wp-content/uploads/2021/01/doctors-rebirth-cover.jpg"
                        alt=""
                        className="w-32"
                    />
                </Link>
            </div>
            <div className="w-[100%] text-sm ml-4 mt-1 flex flex-col">
                <div className="font-bold mb-1">Doctor's Rebirth</div>
                <Chapter chapter={93} />
                <Chapter chapter={92} />
                <Chapter chapter={91} />
            </div>
        </div>
    )
}