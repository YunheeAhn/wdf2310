import { Box, Button, CardBody, CardFooter, CardHeader, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"


import NFT from "../../../components/card/NFTs";
// import Card from "components/card/Card.jsx";


import NFT1 from '../../../assets/images/NFTs/Nft1.png'
import NFT2 from '../../../assets/images/NFTs/Nft2.png'
import NFT3 from '../../../assets/images/NFTs/Nft3.png'
import NFT4 from '../../../assets/images/NFTs/Nft4.png'
import NFT5 from '../../../assets/images/NFTs/Nft5.png'
import NFT6 from '../../../assets/images/NFTs/Nft6.png'

import Avatar1 from '../../../assets/images/Avartars/avatar1.png'
import Avatar2 from '../../../assets/images/Avartars/avatar2.png'
import Avatar3 from '../../../assets/images/Avartars/avatar3.png'
import Avatar4 from '../../../assets/images/Avartars/avatar4.png'



const Trending = () => {
    return (
        <>
        <Box display={'flex'} justifyContent={'space-between'} mt={'20px'} mb={'16px'} px={'16px'}>
            <Box>
                <Heading as={'H3'} color={'navy.700'} fontSize={'24px'} fontWeight={700}>Trending NFTs</Heading>
            </Box>
            <Box display={'flex'}>
                <Button bg={'none'} color={'navy.650'} >Art</Button>
                <Button bg={'none'} color={'navy.650'}>Music</Button>
                <Button bg={'none'} color={'navy.650'}>Collection</Button>
                <Button bg={'none'} color={'navy.650'}>Sports</Button>
            </Box>
        </Box>
        <SimpleGrid columns={{ base : 1, md : 3}} gap={'14px'} w={'100%'}>
            <NFT name='Abstract Colors' author='By Esthera Jackson' bidders={[Avatar1,Avatar2,Avatar3,Avatar4,Avatar1,Avatar1,Avatar1,]} image={NFT1} currentbid='0.91 ETH' download='#' />
            <NFT name='ETH AI Brains' author='By Nick Wilson' bidders={[Avatar1,Avatar2,Avatar3,Avatar4,Avatar1,Avatar1,Avatar1,]} image={NFT2} currentbid='0.91 ETH' download='#' />
            <NFT name='Mesh Gradients' author='By Will Smith' bidders={[Avatar1,Avatar2,Avatar3,Avatar4,Avatar1,Avatar1,Avatar1,]} image={NFT3} currentbid='0.91 ETH' download='#' />
        </SimpleGrid>
        

        {/*             
            <Flex flexDir={'column'}>
                <SimpleGrid columns={{ base : 1, md : 3}} gap={'14px'} w={'100%'}>
                    <NFT name='Abstract Colors' author='By Esthera Jackson' bidders={[Avatar1,Avatar2,Avatar3,Avatar4,Avatar1,Avatar1,Avatar1,]} image={NFT1} currentbid='0.91 ETH' download='#' />
                    <NFT name='ETH AI Brains' author='By Nick Wilson' bidders={[Avatar1,Avatar2,Avatar3,Avatar4,Avatar1,Avatar1,Avatar1,]} image={NFT2} currentbid='0.91 ETH' download='#' />
                    <NFT name='Mesh Gradients' author='By Will Smith' bidders={[Avatar1,Avatar2,Avatar3,Avatar4,Avatar1,Avatar1,Avatar1,]} image={NFT3} currentbid='0.91 ETH' download='#' />
                </SimpleGrid>
                    <Box>
                        <Heading as={'H3'} color={'navy.700'} fontSize={'24px'} mt={'45px'} mb={'36px'} fontWeight={700}>Recently Added</Heading>
                    </Box>
                <SimpleGrid columns={{ base : 1, md : 3}} gap={'14px'} w={'100%'}>
                    <NFT name='Swipe Circles' author='By Peter Will' bidders={[Avatar1,Avatar2,Avatar3,Avatar4,Avatar1,Avatar1,Avatar1,]} image={NFT4} currentbid='0.91 ETH' download='#' />
                    <NFT name='Colorful Heaven' author='By Mark Benjamin' bidders={[Avatar1,Avatar2,Avatar3,Avatar4,Avatar1,Avatar1,Avatar1,]} image={NFT5} currentbid='0.91 ETH' download='#' />
                    <NFT name='3D Cubes Art' author='By Manny Gates' bidders={[Avatar1,Avatar2,Avatar3,Avatar4,Avatar1,Avatar1,Avatar1,]} image={NFT6} currentbid='0.91 ETH' download='#' />
                </SimpleGrid>
            </Flex> */}

        
        
        </>
    )
}

export default Trending;



