// 레이아웃 컴포넌트

// import styled from "styled-components";

import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";


const Layout = (props) => {
    return (
        <Box display={'flex'} flexDir={'column'} minH={'100vh'}>
            <Header />
                <Box as="main" id="main" flexGrow={1} pt={'37px'} >
                        {props.showTitle && <h2>{props.title}</h2>}
                        {props.children}
                </Box>
            <Footer />
        </Box>


        // <WrapStyled>
        //     <Header />
        //         <MainStyled id="main" flexGrow={1} >
        //             <Containerwrap py={4}>
        //                 <h2>{props.title}</h2>
        //                 {props.children}
        //                 {/* props.children : App.jsx의 Layout태그 안에 있는 내용 */}
        //             </Containerwrap>
        //         </MainStyled>
        //     <Footer />
        // </WrapStyled>
    )
}



// const WrapStyled = styled.div`
//     height : 100vh;
//     display : flex;
//     flex-direction: column;
//     justify-content: space-between;

// `

// const MainStyled = styled.main`
//     heigt : 500px;
    
//     `


    
export default Layout;