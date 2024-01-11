import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import User from '../pages/User'
import Layout from '../components/Layout'


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/user",
                element: <User />
            }
        ]
    }
])

export default Router