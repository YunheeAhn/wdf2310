// 라우터스 컴포넌트

import Marketplace from "./views/marketplace/Marketplace";
import Home from "./views/home";
import DataTables from "./views/datatables/Datatables";
import Profile from "./views/profile/Profile";
import Signin from "./views/signin/Signin";
import Rtl from "./views/rtl/Rtl";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const routeArr = [
    {   path : "/",
        element: <Home/> },
    {   path : "/marketplace",
        element: <Marketplace/> },
    {   path : "/datatables",
        element : <DataTables/> },
    {   path : "/profile",
        element: <Profile/> },
    {   path:"/signin",
        element: <Signin/> },
    {   path:"/rtl",
        element: <Rtl/> },

]

const Routers = () => {
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