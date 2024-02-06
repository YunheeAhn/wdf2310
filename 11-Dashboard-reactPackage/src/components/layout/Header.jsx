// 헤더컴포넌트

// import { SearchIcon, SunIcon } from '@chakra-ui/icons'
import { ButtonGroup, IconButton,Box, Heading, Button, ListItem} from "@chakra-ui/react";
import Containerwrap from "./Container";
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHamburger, FaUser } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";
import Gnb from './Gnb';
// import gsap from 'gsap';
import { useEffect, useState } from 'react';


const Header = () => {
    // const 
    // gsap 적용하기
    // 스크롤 이벤트 함수

    
    // const HandleScroll = () => {
    //     const scrollY = window.scrollY // 현재 스크롤 위치
    //     const hd = document.querySelector('#header') // 헤더
    //     const navBelt = document.querySelector('.nav-belt__wrapper') // 헤더
    //     const navBar = document.querySelector('.nav-bar__wrapper') // 헤더
    //     const hdHeight = hd.offsetHeight // 헤더 높이
    //     const swiperHeight = document.querySelector('.top-cont')?.offsetHeight || 0; // 슬라이드 높이
    //     console.log(scrollY)
    //     console.log(swiperHeight - hdHeight)


    //     if (scrollY > swiperHeight - hdHeight ) {
    //         // gsap.to(요소, {옵션})
    //         gsap.to(navBar, { backgroundColor: 'rgba(250,250,250,0.6)', duration: 0.5 })
    //         gsap.to(navBelt, { backgroundColor: 'rgba(150,30,150,0.1)', duration: 0.5 })

    //         // gsap.to(navBelt.querySelectorAll('button'), {color: #000, duration: 0.5})
    //     } else {
    //         // else : 100px 이하로 스크롤 되면 배경색을 없앤다.
    //         gsap.to(navBar, { backgroundColor: '', duration: 0.5 })
    //         gsap.to(navBelt, { backgroundColor: '', duration: 0.5 })
    //     }

        
    // }
    // 스크롤 이벤트 등록

    const [isScroll, setIsScroll] = useState(false)

    useEffect( () => {
        const handleScroll = () => {
            const navBeltHeight = document.querySelector('.nav-belt__wrapper')?.offsetHeight || 0
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop

            if (scrollPosition > navBeltHeight) {
                document.getElementById('header').style.top = '-32px'
                document.querySelector('.nav-bar__wrapper').style.width = '100%'
            } else {
                document.getElementById('header').style.top = -scrollPosition + 'px'
                setIsScroll(true)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    },[])
    

    
    

    return (
        <>
        <Box id="header" as='header' position={'fixed'} top={0} left={0} right={0} zIndex={1000} bg={isScroll ? "rgba(0,0,0,.1)" : 'transparent'} backdropFilter={isScroll ? 'saturate(180%) blur(15px)' : 'none'} >

            {/* tnb, 모바일에선 없음 */}
            <Box className="nav-belt__wrapper" display={['none', null, null, null, "block"]} bgColor={"rgba(0,0,0,0.6)"}>

                <Containerwrap display="flex" justifyContent={"space-between"} >
                    <ButtonGroup direction="row" spacing={4} align="center">
                        <Button variant="link12">공공기관용</Button>
                        <Button variant="link12">금융클라우드</Button>
                    </ButtonGroup>
                    <ButtonGroup direction="row" spacing={4} align="center">
                        <Button variant="link12">로그인</Button>
                        <Button variant="link12">회원가입</Button>
                        <Button variant="link12">Languages</Button>
                    </ButtonGroup>
                </Containerwrap>
            </Box>

            {/* gnb */}
            <Box id='hd' className="nav-bar__wrapper" bgColor={"rgba(150,30,150,0.1)"} h={100} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Containerwrap display={'flex'} h={'60px'} alignItems={'center'} justifyContent={'space-between'}>
                    <Heading as={"h1"} fontSize={20}>
                        <Link to="/">네이버 클라우드 플랫폼</Link>
                    </Heading>

                    <Gnb display={'flex'} gap={'20px'}>
                        <ListItem>
                            <Link to="/marketplace" >Main Dashboard</Link>
                        </ListItem>
                        <ListItem>
                        <Link to="/datatables">Datatables Dashboard</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/profile">Profile Dashboard</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/signin">signin Dashboard</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/rtl">Rtl Dashboard</Link>
                        </ListItem>
                    </Gnb>

                    <ButtonGroup display={'flex'} gap={3} >
                        <IconButton variants="ghost" aria-label="Search database" icon={<FaUser />} />
                        <IconButton variants="ghost" aria-label="Light database" icon={<RiSearchFill />} />
                        <IconButton variants="ghost" aria-label="Light database" icon={<FaHamburger />} />
                    </ButtonGroup>
                </Containerwrap>
            </Box>
        </Box>

        </>
    )
}

// 스타일드컴포넌트 설정방법
// const 변수이름 = styled.태그이름 `속성 : 값` -> 일반태그사용
// const 변수이름 = styled(컴포넌트이름) `속성 : 값` -> 컴포넌트사용

// const 변수이름 = styled(컴포넌트 이름)`속성: 값;`



// const LogoStyled = styled(Heading)`
//     color: ${props => props.theme.colors.red[900]};

// `

// const NavStyled = styled.nav`
//     height : 100%;
//     background : ${props => props.theme.colors.red[200]};
    
// `
// const NavUlStled = styled.ul`
//     display : flex;
//     align-items : center;
//     justify-content: space-between;
//     margin : 0;
//     gap : 20px;
//     height : 100px;
//     list-style : none; 

//     text-decoration : none;

//     li {
//         width : 100%;
//         text-align : center;        
//     }

//     a {
//         display: block;
//     }

//     @media screen and (min-width : 768px) {
//         flex-direction : row;;

//         li {
//             width : auto;
//         }

//         a {
//             display: inline-block;
//         }
//     }
//     `
// const IconBtnGroup = styled(ButtonGroup)`
    
//     button {
//     color : #555;
//     backgroundcolor : lightgray;
    
//     display: flex;
//     align-items: center;}
//     `

export default Header;