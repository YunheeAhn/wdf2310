// 라우터스 컴포넌트

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Marketplace from "./views/Marketplace";
import Home from "./views";
import DataTables from "./views/Datatables";
import Profile from "./views/Profile";
import Signin from "./views/Signin";
import Rtl from "./views/Rtl";
import './assets/scss/style.scss'
const routeArr = [
    {   path:"home",
        element: <Home/> },
    {   path:"/marketplace",
        element: <Marketplace/> },
    {   path:"/datatables",
        element: <DataTables/> },
    {   path:"/profile",
        element: <Profile/> },
    {   path:"/signin",
        element: <Signin/> },
    {   path:"/rtl",
        element: <Rtl/> },

]

const Routers = (props) => {
    return(
        <BrowserRouter>
            <Routes>
                {routeArr.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default Routers