import { Outlet } from "react-router-dom"
import Header from "../Header"
import Sidebar from "../Sidebar"
import Footer from "../Footer"
import "./_layout.scss"


const Layout = () => {
    return (
        <div className="app">
            <Header />
            <Sidebar />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout