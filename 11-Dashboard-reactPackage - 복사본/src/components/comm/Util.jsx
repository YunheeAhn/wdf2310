import { Avatar, Box, Button, ButtonGroup, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react"
import { faBell, faMagnifyingGlass, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Util = () => {
    return (
        <Stack spacing={4} borderRadius={'100px'} border={'1px solid #d1d5db'} padding={'8px'} h={'65px'} margin >
            <InputGroup borderRadius={'100px'} display={'flex'} alignItems={'center'} color='#D1D5DB' >
                <InputLeftElement pointerEvents='none' >
                <FontAwesomeIcon icon={faMagnifyingGlass}  />
                </InputLeftElement>
                <Input type='text' placeholder='Search...' color='#D1D5DB' borderRadius={'100px'} bgColor={'#f4f7fe'} border={' .5 solid #e9ecef;'} />

                <ButtonGroup variant={"icon"} display={'flex'} alignItems={'center'} pl={'5px'} color='#D1D5DB' fontWeight={400}>
                    <Button><FontAwesomeIcon icon={faBell} fontWeight={400}/></Button>
                    <Button><FontAwesomeIcon icon={faMoon} /></Button>
                </ButtonGroup>
                <Box marginLeft={'10px'}>
                    <Avatar src='https://img.freepik.com/free-photo/beautiful-model-girl-with-perfect-fresh-clean-skin-youth-skin-care-concept-isolated-pastel-brown-background_658552-32.jpg?size=626&ext=jpg&ga=GA1.1.1444653540.1703556730&semt=sph' />
                </Box>
            </InputGroup>
        </Stack>

    )
}

export default Util


// 각 페이지 상단 검색창