// 레이아웃 컴포넌트

// import styled from "styled-components";

import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <Box display={'flex'} flexDir={'column'} minH={'100vh'}>
            <Header />
                <Box as="main" id="main" flexGrow={1} pt={'37px'} >
                        {/* {props.showTitle && <h2>{props.title}</h2>}
                        {props.children} */}
                    <Outlet />
                </Box>
            <Footer />
        </Box>
    )
}


export const LayoutNone = () => {
    return (
        <Box display={'flex'} bg={'lightcoral'} flexDir={'column'} minH={'100vh'}>
            <Box as="main" id="main" flexGrow={1}>
                <Outlet />
            </Box>
        </Box>
        
    )
}


    
export default Layout;