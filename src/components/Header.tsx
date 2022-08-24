import axios from "axios"
import Cookies from "js-cookie"
import { MagnifyingGlass, Moon, Star, SunDim } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { Context } from "../Context/Context"

let timer: any;

export const Header = () => {
    const [searchParams] = useSearchParams();
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [slug, setSlug] = useState(searchParams.get('slug'));

    const { state, dispatch } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        if (searchParams.get('slug') !== null && slug !== '') {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(handleSearchButton, 500);
        }
    }, [slug])


    const switchTheme = () => {
        dispatch({ type: 'CHANGETHEME' })
        setTheme('light')

    }
    const switchTheme2 = () => {
        dispatch({ type: 'RETURNTHEME' })
        setTheme('dark')

    }

    const handleLogout = () => {
        dispatch({ type: 'REMOVEUSER' });
        Cookies.remove('token')
        location.reload();
    }

    const handleSearchButton = async () => {
        navigate(`/novels?slug=${slug}`, { replace: true })
        let listReq = await axios.get(`https://murmuring-reef-63947.herokuapp.com/api/novels?slug=${slug}`)
        dispatch({ type: 'SETNOVELSSEARCH', payload: listReq.data.novels })
    }


    return (
        <div>
            <div className={`${state.theme.secondaryColor}`}>
                <div className="flex justify-between items-center max-w-[1200px] m-auto h-[60px]">
                    <Link to='/' className="logo">
                        <img
                            src="https://www.asurascans.com/wp-content/uploads/2021/03/Group_1.png"
                            className="w-[50px]"
                            alt=""
                        />
                    </Link>

                    <div className="searchArea flex items-center">
                        {!state.user.user.name &&
                            <button className="mr-4" onClick={() => navigate('/login')}>Entrar</button>
                        }
                        {state.user.user.name &&
                            <div className="mr-4">
                                Olá {state.user.user.name}
                                <button className="ml-8" onClick={handleLogout}>Logout</button>
                            </div>
                        }
                        <div className="flex items-center">
                            <input
                                type="text"
                                onChange={e => {
                                    setSlug(e.target.value)
                                    searchParams.set('slug', '')
                                }}
                                className={`sm:w-[350px] w-[60%] h-[34px] ${state.theme.mainColor} pt-1.5 pr-7 pb-1.5 pl-5 mr-10 rounded border border-zinc-800 ${state.theme.place} text-sm`}
                                placeholder="Search"
                            />
                            <MagnifyingGlass onClick={handleSearchButton} size={16} color={`${state.theme.iconColor}`} className="cursor-pointer relative right-[70px]" />
                        </div>
                        <label htmlFor="checkTheme" className="flex items-center cursor-pointer">
                            <input id="checkTheme" className="opacity-0 w-0 h-0" type="checkbox" />
                            <span>
                                {theme === 'dark' &&
                                    <Moon size={32} color={`${state.theme.iconColor}`} onClick={switchTheme} />
                                }
                                {theme === 'light' &&
                                    <SunDim size={32} color={`${state.theme.iconColor}`} onClick={switchTheme2} />
                                }
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="h-10 bg-[#913fe2] hidden sm:block">
                <div className="max-w-[1200px] m-auto h-[100%] flex items-center justify-between">
                    <ul className="flex items-center h-[100%] w-[400px] justify-around text-[15px]">
                        <li className="hover:bg-purple-700 h-[100%] flex items-center pl-2 pr-2 transition-all text-white">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="hover:bg-purple-700 h-[100%] flex items-center pl-2 pr-2 transition-all text-white">
                            <Link to='/'>Bookmarks</Link>
                        </li>
                        <li className="hover:bg-purple-700 h-[100%] flex items-center pl-2 pr-2 transition-all text-white">
                            <Link to='/'>Comics</Link>
                        </li>
                        <li className="hover:bg-purple-700 h-[100%] flex items-center pl-2 pr-2 transition-all text-white">
                            <Link to='/'>Language ▼</Link>
                        </li>
                    </ul>
                    <div className="flex items-center rounded-sm p-1 pl-2 pr-2 bg-[rgb(0,0,0)] bg-opacity-30">
                        <Star size={16} color="#eee" className="mr-2" weight="bold" />
                        <Link to='/' className="text-[12px] text-white">Surprise Me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}