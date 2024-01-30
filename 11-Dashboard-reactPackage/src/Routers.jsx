// 라우터스 컴포넌트

import Marketplace from "./views/Marketplace";
import Home from "./views";
import DataTables from "./views/Datatables";
import Profile from "./views/Profile";
import Signin from "./views/Signin";
import Rtl from "./views/Rtl";
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