// 라우터스 컴포넌트

import Marketplace from "./views/marketplace/Marketplace";
import Home from "./views/home";
import DataTables from "./views/datatables/Datatables";
import Profile from "./views/profile/Profile";
import Signin from "./views/signin/Signin";
import Rtl from "./views/rtl/Rtl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout, { LayoutNone } from "./components/layout/Layout";


const Routers = () => {
    return(

        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home/>}  />
                </Route>

                <Route element={<Layout />}>
                    <Route path="/marketplace" element={<Marketplace/>}  />
                </Route>

                <Route element={<Layout />}>
                    <Route path="/datatables" element={<DataTables/>}  />
                </Route>

                <Route element={<Layout />}>
                    <Route path="/profile" element={<Profile/>}  />
                </Route>

                <Route element={<Layout />}>
                    <Route path="/rtl" element={<Rtl/>}  />
                </Route>

                <Route element={<LayoutNone />}>
                    <Route path="/signin" element={<Signin/>}/>
                </Route>

            </Routes>
        </BrowserRouter>

        // <Route path="/" element={<Layout />}>
        //     {routeArr.map((item, index) => (
        //     <Route key={index} path={item.path} element={item.element} />
        //     ))}
        // </Route>

    )
}

// const routeArr = [
//     {   path : "/",
//         element: <Home/> },
//     {   path : "/marketplace",
//         element: <Marketplace/>},
//     {   path : "/datatables",
//         element : <DataTables/> },
//     {   path : "/profile",
//         element: <Profile/> },
//     {   path:"/rtl",
//         element: <Rtl/> },
// ]

export default Routers