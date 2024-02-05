import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';






const Mainslide = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper top-cont" >
            <SwiperSlide>
                <ImgSizing src='https://images.unsplash.com/photo-1706737141648-2a95d33d2a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='pink flower'>
                </ImgSizing>
            </SwiperSlide>
            <SwiperSlide>
                <ImgSizing src='https://images.unsplash.com/photo-1520052205864-92d242b3a76b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='pink sky'>
                </ImgSizing>
            </SwiperSlide>
            <SwiperSlide>
                <ImgSizing src='https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='pink smoke'>
                </ImgSizing>
            </SwiperSlide>
            
        </Swiper>
    )
}

export default Mainslide;

const ImgSizing = styled.img`
    width: 100%;
    height: 630px;
    background : 
    object-fit : cover;
    object-position : center;


    
`