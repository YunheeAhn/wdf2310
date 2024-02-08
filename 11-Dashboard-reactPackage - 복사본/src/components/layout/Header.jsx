// 헤더컴포넌트

import { Box, Heading} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Gnb from './Gnb';
import { Link as ReactRouterLink } from 'react-router-dom'


const Header = () => {

    return (
        <>
        <Box as="header" id="header" position={'fixed'} top={0} left={0} bottom={0} zIndex={1000} w={292} bg={'white'}>
            <Heading as={'h1'}
                fontSize={25}
                fontWeight={400}
                pt={14}
                pb={9}
                textAlign={'center'}
                borderBottom={'1px solid'}
                borderColor={'lineDefault'}>
                    
                <Link as={ReactRouterLink} to="/">
                    <span>Horizon</span>
                    <span>Free</span>
                </Link>
            </Heading>

            <Gnb w={'100%'} margin={0}/>

        </Box>

        </>
    )
}



export default Header;