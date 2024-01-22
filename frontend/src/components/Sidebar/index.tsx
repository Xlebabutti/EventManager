import { useDispatch, useSelector } from 'react-redux';
import Logo from '../Header/Logo'
import './_sidebar.scss'
import { RootState } from '../../redux/store';
import { toggleSidebar } from '../../redux/actions/sidebarSlice';
import { useEffect } from 'react';
import { Delete, NavigateBefore, NavigateNext, PhoneAndroid, Search } from '@mui/icons-material';



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
                <button onClick={handleToggleSidebar}>
                    {isOpen ? <NavigateNext /> : <NavigateBefore />}
                </button>
                {isOpen ? (
                    <div className="sidebar__list">
                        <a href="">
                            <Logo />
                        </a>
                        <span>OVERVIEW</span>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                        </ul>
                    </div>
                ) : (
                    <div className="sidebar__list">
                        <div className="sidebar__lik">
                            <div className="sidebar__icon">
                                <PhoneAndroid />
                            </div>
                        </div>
                        <div className="sidebar__lik">
                            <div className="sidebar__icon">
                                <Search />
                            </div>
                        </div>
                        <div className="sidebar__lik">
                            <div className="sidebar__icon">
                                <Delete />
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar