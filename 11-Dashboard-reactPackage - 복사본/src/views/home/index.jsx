// 첫페이지

import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import Ministatics from "../../components/card/Ministatics";



const Home = () => {
    return (
        <>
        
        <VStack spacing="20px" width={'100%'}>

            <SimpleGrid columns={{base : 1,md : 2,xl : 6}} spacing={10} width={'100%'}>
                <Ministatics />
                <Ministatics />
                <Ministatics />
                <Ministatics />
                <Ministatics />
                <Ministatics />
            </SimpleGrid>
            
            <SimpleGrid columns={{base : 1,md : 2}} spacing={10} width={'100%'}>
                <Box bg={'tomato'} height={'90px'}></Box>
                <Box bg={'tomato'} height={'90px'}></Box>
            </SimpleGrid>

            <SimpleGrid columns={{base : 1,md : 2}} spacing={10} width={'100%'}>
                <Box bg={'tomato'} height={'90px'}></Box>
                <SimpleGrid columns={{base : 1,md : 2}} spacing={10} width={'100%'}>
                    <Box bg={'tomato'} height={'90px'}></Box>
                <Box bg={'tomato'} height={'90px'}></Box>
                </SimpleGrid>
            </SimpleGrid>

            <SimpleGrid columns={{base : 1,md : 2}} spacing={10} width={'100%'}>
                <Box bg={'tomato'} height={'90px'}></Box>
                <SimpleGrid columns={{base : 1,md : 2}} spacing={10} width={'100%'}>
                    <Box bg={'tomato'} height={'90px'}></Box>
                <Box bg={'tomato'} height={'90px'}></Box>
                </SimpleGrid>
            </SimpleGrid>

        </VStack>

        </>
    )
}



export default Home;