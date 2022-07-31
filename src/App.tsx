import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Novel } from "./pages/Novel"

function App() {
    return (
        <div>
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
