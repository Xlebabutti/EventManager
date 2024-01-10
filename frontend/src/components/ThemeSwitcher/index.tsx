import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "./Slice"
import './_themeSwitcher.scss'
import { RootState } from "../../redux/store"



const ThemeSwitcher = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme.data)

    const togglleTheme = () => {
        console.log('before', theme)
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
        console.log('after', theme)
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