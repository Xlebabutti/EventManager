import './_header.scss'
import Profile from './Profile'


const Header = () => {
    return (
        <div className='header'>
            <div className="header-wrapper">
                <div className="left">
                    <div className="header__search">

                    </div>
                </div>

                <div className="right">
                    <div className="header__lang-switcher">
                        <LangSwitcher />
                    </div>
                    <div className="header__notifications">
                        {/* <Notifications /> */}
                    </div>
                    <div className="header__contacts">
                        {/* <Contacts /> */}
                    </div>
                    <div className="header__settings">
                        {/* <Settings /> */}
                    </div>
                    <div className="header__profile">
                        <Profile />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header