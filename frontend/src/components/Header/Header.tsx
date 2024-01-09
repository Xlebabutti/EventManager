import './Header.scss/'
import Logo from './Logo/Logo'
import Profile from './Profile/Profile'


const Header = () => {
    return (
        <div className='header'> 
            <Logo />
            <Profile />
        </div>
    )
}

export default Header