// 레이아웃 컴포넌트

import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    return (
        <WrapStyled>
            <Header />
                <MainStyled id="main">
                    <h2>{props.title}</h2>
                    {props.children}
                    {/* props.children : App.jsx의 Layout태그 안에 있는 내용 */}
                </MainStyled>
            <Footer />
        </WrapStyled>
    )
}

const WrapStyled = styled.div`
    height : 100vh;
    display : flex;
    flex-direction: column;
    justify-content: space-between;

`

const MainStyled = styled.main`
    heigt : 500px;
    
    `


    
export default Layout;