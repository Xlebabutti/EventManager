import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "./Slice"
import './_themeSwitcher.scss'
import { RootState } from "../../redux/store"
import { useCookies } from "react-cookie"
import { useEffect } from "react"


const ThemeSwitcher = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme.data)
    const [cookies, setCookie] = useCookies(['theme'])

    useEffect(() => {
        if(cookies) {
            const themeCookie = cookies.theme
            if(themeCookie) {
                setTheme(themeCookie)
            } else {
                setCookie('theme', 'light')
            }
        }
    }, [cookies])

    const togglleTheme = () => { 
        const newTheme = theme === 'light' ? 'dark' : 'light'
        dispatch(setTheme(newTheme))
        setCookie('theme', newTheme)
    }

    return (
        <div>
            <label htmlFor="theme-switcher">
                Тема:
                <select id="theme-switcher" value={theme} onChange={togglleTheme}>
                    <option value="light">Светлая</option>
                    <option value="dark">Темная</option>
                </select>
                <span className="icon">
                    <i className="fa fa-sun"></i>
                </span>
            </label>
        </div>
    )
}

export default ThemeSwitcher