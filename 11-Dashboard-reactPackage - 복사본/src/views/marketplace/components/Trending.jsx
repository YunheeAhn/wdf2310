import { Box, Button, Flex, Heading } from "@chakra-ui/react"



import React, { useEffect } from 'react'

import NFT from '../../../components/card/NFTs'


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
    useEffect(() => {
        // 컴포넌트가 마운트될 때 body에 id 추가
        document.body.setAttribute('id', 'marketplace')

        // 컴포넌트가 언마운트될 때 실행될 클린업 함수
        return () => {
            // 컴포넌트가 언마운트될 때 body에서 id 제거
            document.body.removeAttribute('id')
        }
        // []를 두번째 인자로 넘겨주면 컴포넌트가 마운트될 때와 언마운트될 때만 실행됨
        // 만약 두번째 인자를 넘겨주지 않으면 컴포넌트가 업데이트될 때마다 실행됨
        // 만약 두번째 인자에 특정 값이 들어가면 그 값이 변경될 때만 실행됨
        // 만약 두번째 인자에 빈 배열이 들어가면 컴포넌트가 마운트될 때만 실행됨
    }, [])

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
        <Flex flexDir={'column'} gap={'10px'}>
            <Box display={'flex'} gap={'10px'}>
            <NFT 
                    name="Abstract Colors"
                    author="By Esthera Jackson"
                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                    image={NFT1}
                    currentbid="0.91 ETH"
                    download="#"
                />
                <NFT 
                    name="ETH AI Brain"
                    author="By Nick Wilson"
                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                    image={NFT2}
                    currentbid="0.7 ETH"
                    download="#"
                />
                <NFT 
                    name="Mesh Gradients"
                    author="By Will Smith"
                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                    image={NFT3}
                    currentbid="2.92 ETH"
                    download="#"
                />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mt={'20px'} mb={'16px'} px={'16px'}>
                <Box>
                    <Heading as={'H3'} color={'navy.700'} fontSize={'24px'} fontWeight={700}>Recently Added</Heading>
                </Box>
                <Box display={'flex'}>
                    <Button bg={'none'} color={'navy.650'} >Art</Button>
                    <Button bg={'none'} color={'navy.650'}>Music</Button>
                    <Button bg={'none'} color={'navy.650'}>Collection</Button>
                    <Button bg={'none'} color={'navy.650'}>Sports</Button>
                </Box>
            </Box>
            <Box display={'flex'} gap={'10px'}>
                <NFT 
                    name="Abstract Colors"
                    author="By Esthera Jackson"
                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                    image={NFT4}
                    currentbid="0.91 ETH"
                    download="#"
                />
                <NFT 
                    name="ETH AI Brain"
                    author="By Nick Wilson"
                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                    image={NFT5}
                    currentbid="0.7 ETH"
                    download="#"
                />
                <NFT 
                    name="Mesh Gradients"
                    author="By Will Smith"
                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                    image={NFT6}
                    currentbid="2.92 ETH"
                    download="#"
                />
            </Box>
        </Flex>
            







        
        
        </>
    )
}

export default Trending;



