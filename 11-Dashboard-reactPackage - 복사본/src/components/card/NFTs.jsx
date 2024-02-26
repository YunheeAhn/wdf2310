// Chakra imports
import { Box, Button, Flex, Image, Link, Text,SimpleGrid, CardHeader, CardBody, AvatarGroup, CardFooter, Avatar, Heading, } from "@chakra-ui/react";
  // Custom components
import Card from "components/card/Card.jsx";
  // Assets
import React, { useState } from "react";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function NFT(props) {
    const { image, name, author, bidders, download, currentbid } = props;
    const [like, setLike] = useState(false);

    return (
        <>
        
        <SimpleGrid columns={{ base : 1, md : 3}} gap={'14px'} w={'100%'}>
            <Card padding={'16px'}>
                <CardHeader padding={0}>
                    <Flex  w={'100%'}>
                        <Box w={'100%'} mb={{ base: "20px", "2xl": "20px" }} position={'relative'} >
                            <Image src={image} w={"100%"} h={{ base: "100%", "3xl": "100%" }}  borderRadius='20px' />
                            <Button bg={'white'} w={'36px'} h={'36px'} borderRadius={'50%'} border={'1px solid white'} position={'absolute'} top={'10px'} right={'10px'} onClick={() => {setLike(!like); }}>
                                <FontAwesomeIcon icon={faHeart} transition='0.2s linear' fontWeight={like ? 400 : 700} color='#422AFB' />
                            </Button>
                        </Box>
                    </Flex>
                </CardHeader>
                <CardBody flexDir={'column'} justify='space-between' px={'4px'} mb={'12px'}>
                    <Flex flexDir={{base: "row", md: "column",lg: "row",xl: "column","2xl": "row"}} mb={'auto'}>
                        <Flex direction={'column'}>
                            <Text className="card-title" color={'navy.700'} fontWeight={700} fontSize={{base: "xl", md: "lg", lg: "lg", xl: "lg",  "2xl": "md","3xl": "lg"}}>{name}</Text>
                            <Text className="card-author" color={'secondaryGray.600'} fontSize={'14px'} pt={'8px'}>{author}</Text>
                        </Flex>
                        <AvatarGroup max={3} size='sm' mt={{ base: "0px", md: "10px", lg: "0px", xl: "10px", "2xl": "0px", }} >
                            {bidders.map((avt, key) => (<Avatar key={key} src={avt} />))}
                        </AvatarGroup>
                    </Flex>
                </CardBody>
                <CardFooter>
                    <Flex align='start' justify='space-between' direction={{ base: "row", md: "column",lg: "row",xl: "column","2xl": "row",}} mt='25px'>
                        <Text fontWeight='700' fontSize='sm'>
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
        </SimpleGrid>
        </>
    )
}