// 헤더컴포넌트

import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/layout";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Containerwrap from "./Container";

const Header = () => {
    return (
        <>
        <Box as="header" borderBottom={['1px','solid']} borderColor={'#eee'}>
            {/* chakra-ui용 스타일 넣는 방법 */}
            <Containerwrap>
                <Box display={['block',null,'flex']} h={100} alignItems={'center'} justifyContent={'space-between'}>
                    <Heading fontSize={24}>
                        <Link to="/">Dashboard</Link>
                        
                    </Heading>
                    
                    <NavStyled>
                        <NavUlStled>
                            <li><Link to="/marketplace">Main Dashboard</Link></li>
                            <li><Link to="/datatables">Datatables Dashboard</Link></li>
                            <li><Link to="/profile">Profile Dashboard</Link></li>
                            <li><Link to="/signin">signin Dashboard</Link></li>
                            <li><Link to="/rtl">Rtl Dashboard</Link></li>
                        </NavUlStled>
                    </NavStyled>

                    <IconBtnGroup gap='4'>
                        <IconButton aria-label='Search database' icon={<EmailIcon />}> 
                            Email
                        </IconButton>
                        <IconButton label='Light database' icon={<PhoneIcon />}> 
                            Phone
                        </IconButton>
                    </IconBtnGroup>
                </Box>
            </Containerwrap>
        </Box>
        </>
    )
}

// 스타일드컴포넌트 설정방법
// const 변수이름 = styled.태그이름 `속성 : 값` -> 일반태그사용
// const 변수이름 = styled(컴포넌트이름) `속성 : 값` -> 컴포넌트사용

const NavStyled = styled.nav`
    height : 100%;

    background : lightgreen;
    
`
const NavUlStled = styled.ul`
    display : flex;
    align-items : center;
    justify-content: space-between;
    margin : 0;
    gap : 20px;
    height : 100px;
    list-style : none; 

    text-decoration : none;

    li {
        width : 100%;
        text-align : center;        
    }

    a {
        display: block;
    }

    @media screen and (min-width : 768px) {
        flex-direction : row;;

        li {
            width : auto;
        }

        a {
            display: inline-block;
        }
    }
    `
const IconBtnGroup = styled(ButtonGroup)`
    
    button {
    color : #555;
    backgroundcolor : lightgray;
    
    display: flex;
    align-items: center;}
    `

export default Header;