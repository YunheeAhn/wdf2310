// 풋터 컴포넌트

import Containerwrap from "./Container";
import { Box } from "@chakra-ui/react";


const Footer = () => {
    return (
        <Box as="footer" h={20} bg={'#eee'} position={'fixed'} bottom={0} w={'100%'}>
            <Containerwrap as="footer" h={20} bg={'#eee'}>
                저스트쇼핑몰
            </Containerwrap>
        </Box>
    )
}







export default Footer;