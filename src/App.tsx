import { useContext, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Context } from "./Context/Context"
import { useApi } from "./libs/useApi"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Novel } from "./pages/Novel"
import { novelsSearch as NovelsSearch } from './pages/NovelsSearch'
import { UserType } from "./types/UserType"

function App() {
    const api = useApi();
    const { state, dispatch } = useContext(Context)
    const [user, setUser] = useState<UserType | undefined>()

    useEffect(() => {
        if (state.user.user.name === "") {
            const getUser = async () => {
                let user = await api.getUser();
                setUser(user);
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
