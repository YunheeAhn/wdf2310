// 마켓플레이스 페이지 클론 코딩

import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Trending from "./components/Trending";



const Marketplace = () => {
    
    return (
        < >
            <Grid p={'10px'} templateColumns='repeat(3, 1fr)' gap={'10px'} display={{base: 'block', xl : 'grid' }} >
                <GridItem gridColumn={'1 / span 2'} w='100%' h='10'  >
                    <Flex flexDir={'column'} gap={'10px'} >
                        <Banner w={'100%'} bg={'tomato'} height={'90px'}></Banner>
                        <Trending w={'100%'} bg={'tomato'} height={'90px'}></Trending>
                    </Flex>
                </GridItem>
                <GridItem w='100%' h='10' >
                    <Flex flexDir={'column'} gap={'10px'}>
                        <Box w={'100%'} bg={'purple'} height={'90px'}></Box>
                        <Box w={'100%'} bg={'purple'} height={'90px'}></Box>
                    </Flex>
                </GridItem>
            </Grid>
        </>    
    )
}

export default Marketplace;