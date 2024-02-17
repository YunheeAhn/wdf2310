import { Checkbox, Flex, Text } from "@chakra-ui/react"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"

import React from 'react';
import './DragDropContext.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 드래그 드롭 실행 데이터

export const data = [
    { list : 'Landing Page Design', icon : {faEllipsisVertical} },
    { list : 'Mobile App Design', icon : {faEllipsisVertical}},
    { list : 'Dashboard Builder', icon : {faEllipsisVertical}},
    { list : 'Landing Page Design', icon : {faEllipsisVertical}},
    { list : 'Dashboard Builder', icon : {faEllipsisVertical}}
]

const DragDropContext = ({data, index}) => {
    return (
        <>
        <Flex key={index} alignItems={'center'} justifyContent={'space-between'}>
            <Flex className="css-1lekzkb">
                <Checkbox marginRight={'10px'} />
                <Text fontWeight={700} fontSize={'16px'} color={'navy.700'}>{data.list}</Text>
            </Flex>
            <Flex gap={'2px'} w={'24px'} h={'24px'}>
                <FontAwesomeIcon icon={data.icon} />
                <FontAwesomeIcon icon={data.icon} />
            </Flex>
            </Flex>
        </>
        
    )
}

export default DragDropContext