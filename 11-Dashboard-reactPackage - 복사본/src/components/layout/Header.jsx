// 헤더컴포넌트

// import { SearchIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Heading, Container} from "@chakra-ui/react";
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Gnb from './Gnb';
// import gsap from 'gsap';


const Header = () => {

    return (
        <>
        <Box id="header" as='header' position={'fixed'} w={290} top={0} left={{sm : -300, lg : 0}} bottom={0} zIndex={10000}  >

            {/* gnb */}
            <Box id='hd' className="nav-bar__wrapper" bgColor={"#fff"} h={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'}>
                <Container display={'flex'} h={'100%'} alignItems={'center'} flexDirection={'column'} justifyContent={'flex-start'} padding={0}>
                    <Heading as={"h1"} w={'100%'} fontSize={26} padding={'56px'} textAlign={'center'} borderBottom={'1px solid rgb(203 213 224)'}>
                        <Link to="/">
                            <span>Horizon</span>
                            <span>Free</span>
                        </Link>
                    </Heading>

                    <Gnb w={'100%'} margin={0}/>

                </Container>
            </Box>
        </Box>

        </>
    )
}



export default Header;