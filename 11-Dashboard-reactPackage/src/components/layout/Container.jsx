import { Box, Container } from "@chakra-ui/react";



const Containerwrap = (props) => {
    return (
        <>
            <Container maxW={1280} mx={'auto'} px={['20px',null,0]} >
                {props.children}
            </Container>
        </>
    )
}

export default Containerwrap;

