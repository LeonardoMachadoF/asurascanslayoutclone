import Cookies from "js-cookie"
import { useContext, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Context } from "./Context/Context"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Novel } from "./pages/Novel"

function App() {
    const { state, dispatch } = useContext(Context)
    const [user, setUser] = useState<any>({})

    useEffect(() => {
        if (state.user.user.name === "") {
            const getUser = async () => {
                const session = Cookies.get('token');
                let res = await fetch(`http://localhost:3500/api/user/${session}`);
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
                    <Route path='/:slug' element={<Novel />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default App
