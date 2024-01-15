import { Outlet } from "react-router-dom"
import Header from "../Header"
import Sidebar from "../Sidebar"
import "./_layout.scss"


const Layout = () => {
    return (
        <div className="app">
            <Sidebar />
            <main className="content">
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout