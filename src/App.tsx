import Cookies from "js-cookie"
import { useContext, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Context } from "./Context/Context"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Novel } from "./pages/Novel"
import { novelsSearch as NovelsSearch } from './pages/NovelsSearch'
import { UserType } from "./types/UserType"

function App() {
    const { state, dispatch } = useContext(Context)
    const [user, setUser] = useState<UserType | undefined>()

    useEffect(() => {
        if (state.user.user.name === "") {
            const getUser = async () => {
                const session = Cookies.get('token');
                let res = await fetch(`https://murmuring-reef-63947.herokuapp.com/api/user/${session}`);
                let json = await res.json();
                setUser(json)
                dispatch({ type: 'SETUSER', payload: { user: json } })
            }
            getUser()
        }
    }, []);

    return (
        <div className={`${state.theme.secondaryColor} ${state.theme.textColor}`}>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/novels' element={<NovelsSearch />} />
                    <Route path='/:slug' element={<Novel />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default App
