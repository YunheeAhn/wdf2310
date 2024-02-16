import { Box, Container } from "@chakra-ui/react";



const Containerwrap = (props) => {
    return (
        <>
            <Container display="flex" justifyContent={"space-between"} maxW={1280} mx={'auto'} px={['20px',null,0]} >
                {props.children}
            </Container>
        </>
    )
}

export const Section = (props) => {
     // 삼항 연산자
    // 조건 ? 참일 때 : 거짓일 때
    const backgroundColor = props.isLightBackground ? 'white' : 'gray.100'
    return (
        <Box py={'100px'} bg={backgroundColor}>
            {props.children}
        </Box>
    )
}

export default Containerwrap;

