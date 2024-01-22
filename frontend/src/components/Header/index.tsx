import { Contacts, Language, Notifications, Search, Settings } from '@mui/icons-material'
import './_header.scss'
import Profile from './Profile'


const Header = () => {
    return (
        <header className='header'>
            <div className="header-wrapper">

                <div className="left">
                    <div className="header__search">
                        <Search />
                    </div>
                </div>

                <div className="right">
                    <div className="header__icon">
                        <div className="header__lang-switcher">
                            <Language />
                        </div>
                    </div>

                    <div className="header__icon">
                        <div className="header__notifications">
                            <Notifications />
                        </div>
                    </div>

                    <div className="header__icon">
                        <div className="header__contacts">
                            <Contacts />
                        </div>
                    </div>

                    <div className="header__icon">
                        <div className="header__settings">
                            <Settings />
                        </div>
                    </div>

                    <div className="header__icon">
                        <div className="header__profile">
                            <Profile />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header