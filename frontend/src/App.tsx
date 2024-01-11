import { RouterProvider } from "react-router-dom"
import Router from "./routes"
import './index.scss'


function App() {
    return <RouterProvider router={Router} />
}

export default App