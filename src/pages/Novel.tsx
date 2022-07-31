import axios from "axios";
import { Bookmark, FacebookLogo, PinterestLogo, Star, TwitterLogo, WhatsappLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

export const Novel = () => {
    const [novel, setNovel] = useState<any>();
    const { slug } = useParams();

    useEffect(() => {
        const toTop = () => {
            let x = window.pageYOffset;

            setInterval(() => {
                if (x > 0) {
                    window.scrollTo(0, x)
                    x = x - 10
                }
            }, 1)
        }
        toTop()
    }, [slug])

    useEffect(() => {
        let getNovel = async () => {
            let listReq: any = await axios.get(`https://murmuring-reef-63947.herokuapp.com/api/novel/${slug}`)
            setNovel(listReq.data)
        }
        getNovel();
    }, [slug])

    const handleDate = (date: Date) => {
        let d = new Date(date)
        let month: number | string = d.getMonth() + 1;
        const year = d.getFullYear();
        const day = d.getDate();

        month < 10 ? month = `0${month}` : month

        return `${day}/${month}/${year}`
    }

    return (
        <>
            {novel &&
                <div className="flex-1 mr-4">
                    <div className="text-[13px] bg-[#222] h-10 flex items-center mt-6 rounded pl-4">
                        <Link className="mr-1" to='/'>Home - </Link>
                        <Link to='/'>{novel.novel.title}</Link>
                    </div>
                    <div className="bg-[#222] flex mt-6 rounded">
                        <div className="mt-4 w-[200px] flex flex-col items-center">
                            <div className="p-4">
                                <img className="w-[180px] rounded" src={novel.novel.imagesUrl} alt="" />
                            </div>
                            <div className="w-[180px] flex text-[13px] items-center justify-center bg-[#913fe2] pt-2 pb-2 ml-3 mr-3 rounded">
                                <Bookmark size={16} color="#fff" weight="bold" className="mr-1" />
                                <span>Bookmark</span>
                            </div>
                            <div className="p-1">
                                <span className="text-[13px] text-[#b8b8b8b8]">Followed by 15467 people</span>
                            </div>
                            <div>
                                <div className="flex items-center justify-between w-[180px] pl-2 pr-2 bg-[#343434] rounded">
                                    <div className="flex pt-2 pb-2">
                                        <Star weight="fill" color="yellow" />
                                        <Star weight="fill" color="yellow" />
                                        <Star weight="fill" color="yellow" />
                                        <Star weight="fill" color="yellow" />
                                        <Star weight="fill" color="yellow" />
                                    </div>
                                    <small className="ml-1 mt-1">10</small>
                                </div>
                                <div className="flex items-center justify-between w-[180px] pl-2 pr-2 bg-[#343434] rounded mt-2">
                                    <div className="flex pt-2 pb-2 justify-between w-[180px] text-[13px] text-[#b8b8b8]">
                                        Status: <span>{novel.novel.status.toLowerCase()}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-[180px] pl-2 pr-2 bg-[#343434] rounded mt-2">
                                    <div className="flex pt-2 pb-2 justify-between w-[180px] text-[13px] text-[#b8b8b8]">
                                        Type: <strong className="text-zinc-200">Manhwa</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-20">
                            <div className="mt-8 text-2xl font-bold">
                                <h1>{novel.novel.title}</h1>
                            </div>
                            <div className="flex text-[12px]">
                                <div className="flex items-center ml-2">
                                    <FacebookLogo size={26} color="#333699" weight="bold" />
                                    <span className="ml-2">Facebook</span>
                                </div>
                                <div className="flex items-center ml-2">
                                    <TwitterLogo size={26} color="#3cbbfb" weight="bold" />
                                    <span className="ml-2">Twitter</span>
                                </div>
                                <div className="flex items-center ml-2">
                                    <WhatsappLogo size={26} color="#4ff339" weight="bold" />
                                    <span className="ml-2">Whatsapp</span>
                                </div>
                                <div className="flex items-center ml-2">
                                    <PinterestLogo size={26} color="#c21e1e" weight="bold" />
                                    <span className="ml-2">Pinterest</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[14px] mt-10">Synopsis {novel.novel.title}</h3>
                                <p className="mt-2 text-[14px] text-[#b8b8b8]">{novel.novel.description}</p>
                            </div>
                            <div className="grid grid-cols-2 mt-4 gap-4">
                                <div>
                                    <div className="text-[14px]">Released</div>
                                    <span className="mt-2 text-[14px] text-[#b8b8b8]">asurascans.com</span>
                                </div>
                                <div>
                                    <div className="text-[14px]">Author</div>
                                    <span className="mt-2 text-[14px] text-[#b8b8b8]">{novel.novel.author.name}</span>
                                </div>
                                <div>
                                    <div className="text-[14px]">Artist</div>
                                    <span className="mt-2 text-[14px] text-[#b8b8b8]">{novel.novel.artist.name}</span>
                                </div>
                                <div>
                                    <div className="text-[14px]">PostedBy</div>
                                    <span className="mt-2 text-[14px] text-[#b8b8b8]">asura</span>
                                </div>
                                <div>
                                    <div className="text-[14px]">Posted On</div>
                                    <span className="mt-2 text-[14px] text-[#b8b8b8]">{handleDate(novel.novel.createdAt)}</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-[14px] mt-2">Genres</div>
                                {novel.novel.categories.map((i: any, k: number) => {
                                    return <div key={k} className="mt-2 text-[14px] mr-2 inline-block p-1 bg-[#343434] rounded">
                                        <a key={i.Category.id} href={`http://localhost:3500/api/novels?genre=${i.Category.id}`} rel="tag">{i.Category.name}</a>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}