// 라우터스 컴포넌트

import Marketplace from "./views/marketplace/Marketplace";
import Home from "./views/home";
import DataTables from "./views/datatables/Datatables";
import Profile from "./views/profile/Profile";
import Signin from "./views/signin/Signin";
import Rtl from "./views/rtl/Rtl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout, { LayoutNone } from "./components/layout/Layout";


const routeArr = [
    {   path : "/",
        element: <Home/> },
    {   path : "/marketplace",
        element: <Marketplace/>},
    {   path : "/datatables",
        element : <DataTables/> },
    {   path : "/profile",
        element: <Profile/> },
    {   path:"/rtl",
        element: <Rtl/> },
]



const Routers = () => {
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routeArr.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                    ))}
                </Route>

                <Route element={<LayoutNone />}>
                    <Route path="/signin" element={<Signin/>}/>
                </Route>

            </Routes>
        </BrowserRouter>

    )
}

export default Routers