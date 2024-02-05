// 마켓플레이스 페이지

import { Box } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
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
        <Layout title="marketplace" >
            <Box className="top-cont" h={'500px'} bg={`url(${topImg}) no-repeat 50% / cover`}>
                
            </Box>
            <div>마켓플레이스 컨텐츠</div>
            

            <motion.div style = {boxStyle} initial={{ opacity: 0 }} animate={{ opacity: 1, x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />
            
        </Layout>    
    )
}

export default Marketplace;