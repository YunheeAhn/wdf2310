
import { Card } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic

// Import Swiper styles
import 'swiper/css';

const Banner = () => {
    
    return (
        <>
        <Card>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        </Card>
        </>
    )
}

export default Banner