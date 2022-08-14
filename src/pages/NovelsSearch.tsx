import axios from "axios";
import { Bookmark, FacebookLogo, PinterestLogo, Star, TwitterLogo, WhatsappLogo } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom"
import { Context } from "../Context/Context";

export const novelsSearch = () => {
    const { state, dispatch } = useContext(Context);
    const [novels, setNovels] = useState<any>([]);

    useEffect(() => {
        setNovels(state.novelsSearch.novels)
    }, [state.novelsSearch.novels])
    return (
        <div className="flex-1 xl:mr-4">
            {novels &&
                <div className={`mt-10 ${state.theme.mainColor} p-4`}>
                    {novels.map((i: any, k: number) => (
                        <div key={i.slug} className='p-4 border mt-2 border-zinc-500 flex'>
                            <img src={i.imagesUrl} alt="" className="w-28 h-[140px]" />
                            <div className="ml-4 text-2xl">
                                <Link className="hover:text-purple-600 transition-all" to={`/${i.slug}`}>{i.title}</Link>
                                <p className="text-sm mt-1">{i.description.substr(0, 400) + '...'}</p>
                                {i.categories.map((i: any, k: number) => {
                                    return <div key={k} className={`mt-2 text-[14px] mr-2 inline-block p-1 pl-2 pr-2 ${state.theme.secondaryColor} rounded`}>
                                        <a key={i.Category.id} href={``} rel="tag">{i.Category.name}</a>
                                    </div>
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}