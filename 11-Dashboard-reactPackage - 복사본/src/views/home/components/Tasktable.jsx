import { Box, Button, Card, CardBody, CardHeader, Checkbox, Flex, Text } from "@chakra-ui/react"
import IconBox from "../../../components/icons/IconBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis, faEllipsisVertical, faHouse } from "@fortawesome/free-solid-svg-icons"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"



// 드래그드롭 수도코드
const TaskTable = () => {
    const tasklist = [
        { list : 'Landing Page Design'},
        { list : 'Mobile App Design'},
        { list : 'Dashboard Builder'},
        { list : 'Landing Page Design'},
        { list : 'Dashboard Builder'}
    ]
    
    const onDragEnd = () => {
        console.log("드래그")
    }

    return (
        <>
        <DragDropContext onDragEnd={onDragEnd}>
            <Card>
                <CardHeader paddingBottom={0} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display={'flex'} alignItems={'center'}>
                        <IconBox marginRight={'16px'} w={'24px'} h={'24px'} bg={'bgDefault'} icon={<FontAwesomeIcon icon={faHouse} color='#422AFB' />} />
                        <Text as={'h4'} fontWeight={900} fontSize={'20px'} color={'navy.700'}>Tasks</Text>
                    </Box>
                    <Button variant={'ghost'} borderRadius={'10px'}>
                        <FontAwesomeIcon icon={faEllipsis} color='#422AFB' />
                    </Button>
                </CardHeader>


                <CardBody>
                {/* 움직일 드롭퍼블 구역 시작 */}
                <Droppable droppableId="task">
                    {provided => (
                        
                    <Flex flexDir={'column'} ref={provided.innerRef} {...provided.droppableProps}>
                        {tasklist.map((item, index) => (
                            // 드리거블
                            <Draggable draggableId="task-list" index={index} key={index}>
                            {provided => (
                            <Flex className="task-list-box"  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} alignItems={'center'} justifyContent={'space-between'}>
                                <Flex className="checkText-box" marginBottom={'8px'} padding={'8px'}>
                                    <Checkbox className="check-box" marginRight={'10px'} />
                                    <Text className="text-box" fontWeight={700} fontSize={'16px'} color={'navy.700'}>{item.list}</Text>
                                </Flex>
                                <Flex className="icon-box" gap={'2px'} w={'24px'} h={'24px'}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} className="icons"/>
                                    <FontAwesomeIcon icon={faEllipsisVertical} className="icons"/>
                                </Flex>
                            </Flex>
                            )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </Flex>
                    )}
                </Droppable>
                {/* 움직일 드롭퍼블 구역 끝 */}
                </CardBody>

            </Card>
        </DragDropContext>
        </>
    )
}


export default TaskTable