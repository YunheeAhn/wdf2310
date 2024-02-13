// 마켓플레이스 페이지

import { Box, Img } from "@chakra-ui/react";
// import Layout from "../../components/layout/Layout";
import { motion } from 'framer-motion';
import topImg from '../../assets/images/31448559_about_media_38ef19cd-33e8-4842-aa7c-2ca5473ae3a3.avif'


const Marketplace = () => {
    const boxStyle = {
        width : '200px',
        height : '200px',
        background : 'lightpink',
        borderRadius : '50%'
    }

    return (
        < >
            <Box className="top-cont" h={'500px'} bg={`url(${topImg}) no-repeat 50% 50% / cover`}>
                {/* 리액트의 경우 이미지를 src폴더에 저장 하면, import해서 변수처럼 설정 후 데이터값으로 가져온다 */}
            </Box>
            <Img src={topImg} alt="/" top={0} />
            <Img src="/logo192.png" alt="/" />
            {/* public 폴더 안 이미지는 src="/파일명"으로 불러온다. 단, 지양하자 */}
            {/* <div>마켓플레이스 컨텐츠</div> */}

            

            <motion.div style = {boxStyle} initial={{ opacity: 0 }} animate={{ opacity: 1, x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />
            <motion.div style = {boxStyle} initial={{ opacity: 0 }} animate={{ opacity: 1, x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />
            <motion.div style = {boxStyle} initial={{ opacity: 0 }} animate={{ opacity: 1, x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />
            <motion.div style = {boxStyle} initial={{ opacity: 0 }} animate={{ opacity: 1, x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />
            <motion.div style = {boxStyle} initial={{ opacity: 0 }} animate={{ opacity: 1, x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />
            
        </>    
    )
}

export default Marketplace;