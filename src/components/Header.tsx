import { MagnifyingGlass, Moon, Star, Sun } from "phosphor-react"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <div className="bg-[#0b0a0d]">
                <div className="flex justify-between items-center max-w-[1200px] m-auto h-[60px]">
                    <div className="logo">
                        <img
                            src="https://www.asurascans.com/wp-content/uploads/2021/03/Group_1.png"
                            className="w-[50px]"
                            alt=""
                        />
                    </div>

                    <div className="searchArea flex items-center">
                        <div className="flex items-center">
                            <input
                                type="text"
                                className="w-[350px] h-[34px] bg-[#17151b] pt-1.5 pr-7 pb-1.5 pl-5 mr-10 rounded border border-zinc-800 placeholder-zinc-100 text-sm"
                                placeholder="Search"
                            />
                            <MagnifyingGlass size={16} color="#fafafa" className="relative right-[70px]" />
                        </div>
                        <label htmlFor="checkTheme" className="flex items-center">
                            <input id="checkTheme" className="opacity-0 w-0 h-0" type="checkbox" />
                            <span>
                                <Moon size={32} color="#eee" />
                                {/* <Sun size={32} color="#fafafa" /> */}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="h-10 bg-[#913fe2]">
                <div className="max-w-[1200px] m-auto h-[100%] flex items-center justify-between">
                    <ul className="flex items-center h-[100%] w-[400px] justify-around text-[15px]">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>Bookmarks</Link>
                        </li>
                        <li>
                            <Link to='/'>Comics</Link>
                        </li>
                        <li>
                            <Link to='/'>Language ▼</Link>
                        </li>
                    </ul>
                    <div className="flex items-center rounded-sm p-1 pl-2 pr-2 bg-[rgb(0,0,0)] bg-opacity-30">
                        <Star size={16} color="#eee" className="mr-2" weight="bold" />
                        <Link to='/random' className="text-[12px]">Surprise Me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}