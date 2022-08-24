import { Star } from "phosphor-react"
import { Link } from "react-router-dom"
import { Category } from "../types/CategoryType"
import { NovelType } from "../types/NovelType"

type Props = {
    item: NovelType[]
}

export const PopularHeader = ({ item }: Props) => {
    return (
        <div className="w-[100%] xl:w-[68%] bg-gradient-to-br h-[100%] relative overflow-hidden bg-zinc-600">
            <img className='absolute blur opacity-30 w-[100%]' src={`${item[0].imagesUrl}`} alt="" />
            <div className="absolute w-[100%] p-5 flex justify-between items-center">
                <div className=" mt-5">
                    <div className="flex items-center">
                        <Star size={50} weight='fill' color="orange" />
                        <div className="ml-2">
                            <Link to={`/${item[0].slug}`} className="text-2xl">{item[0].title}</Link>
                            <div className="text-yellow-300">{item[0].origin.name === 'Coreia Do Sul' ? 'Manhwa' : 'Manga'}</div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[200px] overflow-hidden whitespace-nowrap text-sm">
                            {item[0].categories.map((i: Category, k: number) => {
                                if (item[0].categories.length === k + 1) {
                                    return <a key={i.Category.id} href={`http://localhost:3500/api/novels?genre=${i.Category.id}`} rel="tag">{i.Category.name}</a>
                                } else {
                                    return <a key={i.Category.id} href={`http://localhost:3500/api/novels?genre=${i.Category.id}`} rel="tag">{i.Category.name}, </a>
                                }

                            })}
                        </div>
                    </div>
                    <div className="text-sm font-bold mt-3">SUMMARY</div>
                    <div className="w-[90%] overflow-hidden text-sm">
                        <div className="mt-2">
                            <p>{item[0].description.substr(0, 120) + '...'}</p>
                        </div>
                        <div className="mt-2">
                            Status: {item[0].status.toLowerCase()}
                        </div>
                        <div className="mt-2">
                            Author: {item[0].author.name}
                        </div>
                    </div>
                </div>
                <img className="h-[100px] sm:h-[124px] pr-2 mt-[-90px]" src={`${item[0].imagesUrl}`} alt="" />
            </div>
        </div>
    )
}