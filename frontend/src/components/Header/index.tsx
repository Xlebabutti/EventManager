import ThemeSwitcher from '../ThemeSwitcher'
import './_header.scss'
import Logo from './Logo'
import Profile from './Profile'
import Time from './Time'


const Header = () => {
    return (
        <div className='header'>
            <Time />
            <Logo />
            <Profile />
            <ThemeSwitcher />
        </div>
    )
}

export default Header