// 레이아웃 컴포넌트

// import styled from "styled-components";

import { Box, Stack } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import History from "../comm/History";
import Util from "../comm/Util";


const Layout = () => {
    
    return (
        <Box display={'flex'} flexDir={'column'} minH={'100vh'}>
            <Header />
                <Box as="main" id="main" flexGrow={1} pt={10} pl={{base : 0, xl: 292}} pr={{ base: '12px', xl: '12px' }} transition={'all 0.3s'} >
                    <Stack>
                        <Box display={'flex'} flexDir={{base : 'column', xl : 'row'}} justifyContent={'space-between'} marginBottom={'8px'}>
                            <History />
                        <Util />
                        </Box>
                    </Stack>
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