import { faCartShopping, faChartSimple, faHouse, faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { UnorderedList, ListItem, Link } from '@chakra-ui/react'
import { useState } from "react"




const Gnb = () => {
    const gnbArr = [
        { icon : <FontAwesomeIcon icon={faHouse} />, path:'/' , menu : 'Main Dashboard'},
        { icon : <FontAwesomeIcon icon={faCartShopping} />, path:'/marketplace', menu : 'NFT Marketplace'},
        { icon : <FontAwesomeIcon icon={faChartSimple} />, path:'/datatables', menu : 'Data tables'},
        { icon : <FontAwesomeIcon icon={faUser} />, path:'/profile', menu : 'Profile'},
        { icon : <FontAwesomeIcon icon={faLock} /> , path:'/signin', menu : 'signin'},
        { icon : <FontAwesomeIcon icon={faHouse} />, path:'/rtl', menu : 'Rtl'}
    ]
    const location = useLocation()

    const [isSelected, setIsSelected] = useState(0)
    
    return (
            <UnorderedList  display={{ sm: 'none', xl: 'block' }} py={6} gap={'40px'} margin={0} fontSize={'16px'} w={'100%'}>
                {gnbArr.map((item, index) => (
                    <ListItem key={index} w={'100%'}>
                    <Link
                        as={ReactRouterLink}
                        to={item.path}
                        w={'100%'}
                        position="relative"
                        display="flex"
                        alignItems="center"
                        gap="17px"
                        p="9px 0 9px 20px"
                        sx={{
                            // 조건부 스타일 적용
                            color: location.pathname === item.path ? 'primary' : '#a3aed0', // 색상 변경
                            fontWeight: location.pathname === item.path ? 'bold' : 'inherit', // 글씨 굵기 변경
                            '&::after': {
                                content: '""',
                                display: location.pathname === item.path ? 'block' : 'none', // 선택 표시기
                                width: '4px',
                                bg: 'primay',
                                position: 'absolute',
                                top: '4px',
                                right: 0,
                                bottom: '4px',
                                borderRadius: '4px',
                            },
                                _hover: {
                                    bg: 'gray.100', // 마우스 호버 시의 배경색 변경
                                },
                            }} >

                            {item.icon}
                            {item.menu}
                        </Link>
                    </ListItem>
                ))}
            </UnorderedList>
    )
}

export default Gnb