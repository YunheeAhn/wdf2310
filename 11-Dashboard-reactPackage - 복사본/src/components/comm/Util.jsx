import { Avatar, Button, ButtonGroup, Flex, Input, InputGroup, InputLeftElement, Spacer } from "@chakra-ui/react"
import { faBell, faMagnifyingGlass, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Util = () => {
    return (
        <Flex spacing={4} borderRadius={'100px'}  border={'0px solid #d1d5db'} padding={'8px'} h={'65px'} bg={'white'} alignItems={'center'} >
            <InputGroup borderRadius={'100px'} display={'flex'} alignItems={'flex-start'} color='#D1D5DB' >
                <InputLeftElement pointerEvents='none' >
                    <FontAwesomeIcon icon={faMagnifyingGlass}  />
                </InputLeftElement>
                <Input type='text' placeholder='Search...' color='#D1D5DB' borderRadius={'100px'} bgColor={'#f4f7fe'} border={' .5 solid #e9ecef;'} />
            </InputGroup>
            <Spacer />

            <ButtonGroup variant={"icon"} display={'flex'} alignItems={'center'} pl={'5px'} color='#D1D5DB' fontWeight={400}>
                <Button><FontAwesomeIcon icon={faBell} fontWeight={400}/></Button>
                <Button><FontAwesomeIcon icon={faMoon} /></Button>
                <Button variant="ghost" w={'60px'}>
                    <Avatar w={'40px'} h={'40px'} name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                </Button>
            </ButtonGroup>
        </Flex>

    )
}

export default Util


// 각 페이지 상단 검색창