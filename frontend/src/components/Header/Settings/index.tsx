import { useDispatch, useSelector } from 'react-redux'
import { toggleSettings } from '../../../redux/actions/settingsSlice'
import './_settings.scss'
import { RootState } from '../../../redux/store'
import { setTheme } from '../../ThemeSwitcher/Slice'
import ThemeSwitcher from '../../ThemeSwitcher'


const Settings = () => {
    const dispatch = useDispatch()

    const settingsState = useSelector((state: RootState) => state.settings.isOpen)
    // const themeState = useSelector((state: RootState) => state.theme.data) 

    const handleToggleSettings = () => {
        dispatch(toggleSettings())
    }


    return (
        <div className={`settings ${settingsState ? 'settings-open' : 'settings-close'}`}>
            <div className="settings-wrapper">

                <div className="settings-header">
                    <button className="" onClick={handleToggleSettings}>Close</button>
                </div>

                <div className="settings-content">
                    <div className="settings__menu">
                        <ul>
                            <li className="settings__menu-item">
                                <div className="settings__menu-title">
                                    <ThemeSwitcher />
                                </div>
                            </li>
                            <li className="settings__menu-item">
                                <div className="settings__menu-title">
                                    Logout
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="settings-footer">

                </div>

            </div>
        </div>
    )
}

export default Settings