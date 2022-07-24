import { Star } from "phosphor-react"
import { Link } from "react-router-dom"
import { ItemLatest } from "../components/ItemLatest"
import { ItemPopular } from "../components/ItemPopular"


export const Home = () => {
    return (
        <main className="flex-1">
            <div className="flex h-[280px] m-6 justify-between">
                <div className="w-[68%] bg-gradient-to-br h-[100%] relative">
                    <div className="absolute bg-[url('https://www.asurascans.com/wp-content/uploads/2022/04/cover.jpg')] w-[100%] h-[100%] blur opacity-25"></div>
                    <div className="absolute w-[100%] p-5 flex justify-between items-center">
                        <div className=" mt-5">
                            <div className="flex items-center">
                                <Star size={50} weight='fill' color="yellow" />
                                <div className="ml-2">
                                    <a href="" className="text-2xl">Swordmaster’s Youngest Son</a>
                                    <div className="text-yellow-300">Manhwa</div>
                                </div>
                            </div>
                            <div>
                                <div className="w-[200px] overflow-hidden whitespace-nowrap text-sm">
                                    <a href="https://www.asurascans.com/genres/action/" rel="tag">Action</a>,
                                    <a href="https://www.asurascans.com/genres/another-chance/" rel="tag"> Another chance</a>,
                                    <a href="https://www.asurascans.com/genres/fantasy/" rel="tag"> Fantasy</a>,
                                    <a href="https://www.asurascans.com/genres/overpowered/" rel="tag"> Overpowered</a>,
                                    <a href="https://www.asurascans.com/genres/returned/" rel="tag"> Returned</a>,
                                    <a href="https://www.asurascans.com/genres/shounen/" rel="tag"> Shounen</a>
                                </div>
                            </div>
                            <div className="text-sm font-bold mt-3">SUMMARY</div>
                            <div className="w-[90%] overflow-hidden text-sm">
                                <div className="mt-2">
                                    <p>Jin Runcandel was the youngest son of Runcandel, the land’s most prestigious...</p>
                                </div>
                                <div className="mt-2">
                                    Status: ongoing
                                </div>
                                <div className="mt-2">
                                    Author:
                                </div>
                            </div>
                        </div>
                        <img className="h-[124px] mt-[-90px]" src="https://www.asurascans.com/wp-content/uploads/2022/04/cover.jpg" alt="" />
                    </div>
                </div>

                <div className="w-[30%] relative bg-slate-600 bg-[url('https://www.asurascans.com/wp-content/uploads/2021/10/DisasterheroCover01.png')] bg-center bg-cover">
                    <div className="absolute bg-zinc-900 w-[100%] h-[100%] opacity-60"></div>
                    <div className="absolute top-20">
                        <p className="text-center">
                            <b>TRENDING</b> THIS WEEK
                        </p>
                        <p className="text-xl mt-3 p-2">
                            <strong>RETURN OF THE DISASTER-CLASS HERO</strong>
                        </p>
                    </div>
                </div>

            </div>

            <div className="h-[360px] bg-[#222222] m-6">
                <div className="font-bold pl-4 pt-2 pb-2 border-b-[1px] border-zinc-600">Popular Today</div>
                <div className="flex">
                    <ItemPopular />
                    <ItemPopular />
                    <ItemPopular />
                    <ItemPopular />
                    <ItemPopular />
                </div>

            </div>

            <div className="bg-[#222222] m-6">
                <div className="font-bold pl-4 pt-2 pb-2 border-b-[1px] border-zinc-600">Latest Update</div>
                <div className="flex flex-wrap justify-center">
                    <ItemLatest />
                    <ItemLatest />
                    <ItemLatest />
                    <ItemLatest />
                    <ItemLatest />
                    <ItemLatest />
                    <ItemLatest />
                    <ItemLatest />
                    <ItemLatest />
                    <ItemLatest />
                </div>
            </div>
        </main>
    )
}