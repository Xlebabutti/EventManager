import { Outlet } from "react-router-dom"
import Header from "../Header"
import Sidebar from "../Sidebar"
import "./_layout.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import Settings from "../Header/Settings"


const Layout = () => {
    // TODO: если добавлять элемент черезе стейт, то нет анимации!!!
    
    // const settingsState = useSelector(((state: RootState) => state.settings.isOpen))

    return (
        <div className="app">
            <Sidebar />
            <main className="content">
                <Header />
                <div className="content-main">
                    <Outlet />
                </div>
            </main>
            {/* {!settingsState ? '' : <Settings />} */}
            <Settings />
        </div>
    )
}

export default Layout