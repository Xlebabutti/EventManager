import Logo from '../Header/Logo'
import './_sidebar.scss'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <a href="">
                    <Logo />
                </a>
                <span>OVERVIEW</span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar