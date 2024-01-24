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
                <div className="content-main">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Layout