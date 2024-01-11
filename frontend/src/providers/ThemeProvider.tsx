import { ReactNode, useEffect } from "react"
import { useCookies } from "react-cookie"
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../components/ThemeSwitcher/Slice"
import { ThemeContext } from "../contexts/ThemeContext"
import { RootState } from "../redux/store"


interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme.data)
    const [cookies, setCookie] = useCookies(['theme']) 

    useEffect(() => {
        if (cookies) {
            const themeCookie = cookies.theme
            if (themeCookie) {
                document.documentElement.setAttribute('data-theme', themeCookie)
                dispatch(setTheme(themeCookie))
            } else {
                document.documentElement.setAttribute('data-theme', 'light')
                setCookie("theme", "light")
            }
        }
    }, [cookies, dispatch, setCookie])

    const togglleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        dispatch(setTheme(newTheme))
        setCookie('theme', newTheme)
    }

    return (
        <ThemeContext.Provider value={{ togglleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider