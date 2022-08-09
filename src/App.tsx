import { useContext, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Context } from "./Context/Context"
import { Home } from "./pages/Home"
import { Novel } from "./pages/Novel"

function App() {
    const { state, dispatch } = useContext(Context)

    return (
        <div className={`${state.theme.secondaryColor} ${state.theme.textColor}`}>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/:slug' element={<Novel />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default App
