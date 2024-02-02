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
    return <Box py={4}>{props.children}</Box>
}

export default Containerwrap;

