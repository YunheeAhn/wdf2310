
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import styled from 'styled-components'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    
    return (
        <>
            <SwiperStyle pagination={true} modules={[Pagination]} className="mySwiper" py={{ base: "30px", md: "56px" }} px={{ base: "30px", md: "64px" }}>
                <SwiperSlide>
                    <Flex className="slide-box" flexDir={'column'} w={'100%'} h={'100%'}>
                        <Box color={"white"} >
                            <Heading className="slide-title" fontSize={{ base: "24px", md: "34px" }} mb={'14px'}>Discover, collect, and sell extraordinary NFTs</Heading>
                            <Text className="slide-text" mb={'30px'}>Enter in this creative world. Discover now the latest NFT's or start creating your own!</Text>
                        </Box>
                        <Box className="btn-area" gap={4} display={'flex'} >
                            <Button variant={'banner'} fontSize={'14px'} >Discover now</Button>
                            <Button variant={'banner'} fontSize={'14px'} >Watch Video</Button>
                        </Box>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImages src="https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nft-banner" />            
                </SwiperSlide>
                <SwiperSlide>
                    <Image h={'338px'} src="https://horizon-ui.com/horizon-tailwind-react/static/media/NftBanner1.87062366f75bedd52bd2.png" alt="NFT-02"></Image>
                </SwiperSlide>
            </SwiperStyle>
        </>
    )
}
export default Banner

const SwiperStyle = styled(Swiper)`
    width: 100%;
    height: 338px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 20px;
    .swiper-slide {
    }
    .slide-box {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 56px 64px;
    }
    .slide-title {
        font-size: 1.875rem;
        color: white;
    }
    .slide-text {
        margin-top: 10px;
        color: #b5acff;
        font-size: 1rem;
        font-weight: 500;
    }
    .btn-area {
        margin-top: auto;
    }
    .swiper-pagination {
        bottom: 0;
        padding-bottom: 10px;
        margin-bottom: 10px
    }
    .swiper-pagination-bullet {
        background-color: #000;
        
    }
    .swiper-pagination-bullet-active {
        background-color: #fff;
    } 
`
const SwiperImages = styled(Image)`
    object-fit: cover;
    
`