import { useDispatch, useSelector } from 'react-redux';
import Logo from '../Header/Logo'
import './_sidebar.scss'
import { RootState } from '../../redux/store';
import { toggleSidebar } from '../../redux/actions/sidebarSlice';



const Sidebar = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState) => state.sidebar.isOpen)

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar())
    }

    return (
        <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
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
                <button className='' onClick={handleToggleSidebar}>O/C</button>
            </div>
        </div>
    )
}

export default Sidebar