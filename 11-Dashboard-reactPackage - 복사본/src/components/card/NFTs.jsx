// Chakra imports
import { Box, Button, Flex, Image, Link, Text, CardHeader, CardBody, AvatarGroup, CardFooter, Avatar, Card } from "@chakra-ui/react";

  // Assets
import React from "react";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const NFT = (props) => {
    const { image, name, author, bidders, download, currentbid } = props;

    return (
        <>
            <Card padding={'16px'} w={'100%'}>
                <CardHeader padding={0}>
                    <Flex  w={'100%'}>
                        <Box w={'100%'} mb={'12px'} position={'relative'} >
                            <Image src={image} w={"100%"} h={{ base: "100%", "3xl": "100%" }} objectFit={'cover'} borderRadius='20px' />
                            <Button bg={'white'} w={'36px'} h={'36px'} borderRadius={'50%'} border={'1px solid white'} position={'absolute'} top={'10px'} right={'10px'} >
                                <FontAwesomeIcon icon={faHeart} transition='0.2s linear' fontWeight={700} color='#422AFB' />
                            </Button>
                        </Box>
                    </Flex>
                </CardHeader>
                <CardBody flexDir={'column'} justify='space-between' px={'4px'} mb={'12px'} padding={'20px 4px'}>
                    <Flex flexDir={{base: "row", md: "column",lg: "row",xl: "column","2xl": "row"}} mb={'auto'} justifyContent={'space-between'}>
                        <Flex direction={'column'}>
                            <Text className="card-title" color={'navy.700'} fontWeight={700} fontSize={{base: "xl", md: "lg", lg: "lg", xl: "lg",  "2xl": "md","3xl": "lg"}}>{name}</Text>
                            <Text className="card-author" color={'secondaryGray.600'} fontSize={'14px'} pt={'8px'}>{author}</Text>
                        </Flex>
                        <AvatarGroup max={3} size='sm' mt={{ base: "0px", md: "10px", lg: "0px", xl: "10px", "2xl": "0px", }} >
                            {bidders.map((avt, key) => (<Avatar key={key} src={avt} />))}
                        </AvatarGroup>
                    </Flex>
                </CardBody>
                <CardFooter padding={0}>
                    <Flex align='start' alignItems={'center'} justify='space-between' direction={{ base: "row", md: "column",lg: "row",xl: "column","2xl": "row",}} gap={2}  mt='25px'>
                        <Text color={'navy.650'} fontWeight='700' fontSize='sm'>
                            Current Bid: {currentbid}
                        </Text>
                        <Link href={download} mt={{base: "0px",md: "10px",lg: "0px",xl: "10px","2xl": "0px",}}>
                            <Button variant='darkBrand' color='white' fontSize='sm' fontWeight='500' borderRadius='70px' px='24px' py='5px'>
                                Place Bid
                            </Button>
                        </Link>
                    </Flex>
                </CardFooter>
            </Card>

        </>
    )
}

export default NFT