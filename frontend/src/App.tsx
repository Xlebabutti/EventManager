import { useCookies } from "react-cookie"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { useEffect } from "react"
import './index.scss'
import { useDispatch } from "react-redux"
import { setTheme } from "./components/ThemeSwitcher/Slice"


function App() {
    const dispatch = useDispatch()
    const [cookies] = useCookies(['theme'])

    useEffect(() => {
        const themeCookie = cookies.theme
        if (themeCookie) {
            document.documentElement.setAttribute('data-theme', themeCookie)
            dispatch(setTheme(themeCookie))
        }
    }, [cookies])


    return (
        <div className={`main ${cookies.theme}`}>
            <Header />
            <h1>Content</h1>
            <Footer />
        </div>
    )
}

export default App