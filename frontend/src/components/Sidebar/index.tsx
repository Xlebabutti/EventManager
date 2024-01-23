import { useDispatch, useSelector } from 'react-redux';
import Logo from '../Header/Logo'
import './_sidebar.scss'
import { RootState } from '../../redux/store';
import { toggleSidebar } from '../../redux/actions/sidebarSlice';
import { useEffect } from 'react';
import { Delete, NavigateBefore, NavigateNext, PhoneAndroid, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState) => state.sidebar.isOpen)

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar())
    }

    useEffect(() => {
        // TODO: check in storage
    }, [])

    return (
        <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-close'}`}>
            <div className="sidebar-wrapper">
                <div className="sidebar-header">
                    <button onClick={handleToggleSidebar}>
                        {!isOpen ? <NavigateNext /> : <NavigateBefore />}
                    </button>
                    <a href="">
                        <Logo />
                    </a>
                    <span>OVERVIEW</span>
                </div>
                <div className="sidebar-content">
                    {isOpen ? (
                        <nav className="sidebar__menu">
                            <ul>
                                <li className="sidebar__menu-item">
                                    <Link to={'/user'}>
                                        <span className="sidebar__menu-icon">
                                            <PhoneAndroid />
                                        </span>
                                        <span className='sidebar__menu-title'>Phone</span>
                                    </Link>
                                </li>
                                <li className="sidebar__menu-item">
                                    <Link to={''}>
                                        <span className="sidebar__menu-icon">
                                            <Search />
                                        </span>
                                        <span className='sidebar__menu-title'>Search</span>
                                    </Link>
                                </li>
                                <li className="sidebar__menu-item">
                                    <a href="">
                                        <span className="sidebar__menu-icon">
                                            <Delete />
                                        </span>
                                        <span className='sidebar__menu-title'>Delete</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    ) : (
                        <nav className="sidebar__menu">
                            <ul>
                                <li className="sidebar__menu-item">
                                    <a href="">
                                        <span className="sidebar__menu-icon">
                                            <PhoneAndroid />
                                        </span>
                                    </a>
                                </li>
                                <li className="sidebar__menu-item">
                                    <a href="">
                                        <span className="sidebar__menu-icon">
                                            <Search />
                                        </span>
                                    </a>
                                </li>
                                <li className="sidebar__menu-item">
                                    <a href="">
                                        <span className="sidebar__menu-icon">
                                            <Delete />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sidebar