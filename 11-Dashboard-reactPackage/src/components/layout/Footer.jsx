// 풋터 컴포넌트

import styled from "styled-components";
import Containerwrap from "./Container";


const Footer = () => {
    return (
        <FooterStyled>
            <Containerwrap as="footer" h={20} bg={'#eee'}>
                <h2>저스트쇼핑몰</h2>
            </Containerwrap>
        </FooterStyled>
    )
}


const FooterStyled = styled.div`
    background : beige;
    height : 100px

   
`


export default Footer;