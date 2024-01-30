// 헤더컴포넌트

import { Box, Container, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Box as="header" borderBottom={['1px','solid']} borderColor={'Red'}>
            {/* chakra-ui용 스타일 넣는 방법 */}
            <Container display={['block',null,'flex']} justifyContent={'space-between'} >
                {/* 일반 태그에 스타일 넣는 방법! */}
                <Heading as='h1' style={ {width:'50px', height:'100%'} }>
                    <a href="/">Dashboard</a>
                    
                </Heading>
                <nav>
                    <ul>
                        <li><Link to="/marketplace">Main Dashboard</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/datatables">Datatables Dashboard</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/profile">Profile Dashboard</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/signin">signin Dashboard</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/rtl">Rtl Dashboard</Link></li>
                    </ul>
                </nav>
            </Container>
        </Box>
    )
}

export default Header;