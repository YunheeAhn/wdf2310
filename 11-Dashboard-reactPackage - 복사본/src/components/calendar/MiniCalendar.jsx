import { Box, Button, Card, CardBody, CardHeader, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis, faHouse } from "@fortawesome/free-solid-svg-icons"
import IconBox from "../icons/IconBox"
import Calendar from "react-calendar"
import "../../assets/css/MiniCalendar.css";


const MiniCalendar = () => {
    return (
        <>
            <Card>
                <CardHeader paddingBottom={0} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display={'flex'} alignItems={'center'}>
                        <IconBox marginRight={'16px'} w={'24px'} h={'24px'} bg={'bgDefault'} icon={<FontAwesomeIcon icon={faHouse} color='#422AFB' />} />
                        <Text as={'h4'} fontWeight={900} fontSize={'20px'} color={'navy.700'}>Calendar</Text>
                    </Box>
                    <Button variant={'ghost'} borderRadius={'10px'}>
                        <FontAwesomeIcon icon={faEllipsis} color='#422AFB' />
                    </Button>
                </CardHeader>
                <CardBody>
                    <Calendar>
                        
                    </Calendar>
                </CardBody>
            </Card>
        </>
    )
}


export default MiniCalendar