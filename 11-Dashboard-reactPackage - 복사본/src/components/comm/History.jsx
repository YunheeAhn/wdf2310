import { Box, Heading } from '@chakra-ui/react'
import { Link, Link as ReactRouterLink, useLocation } from 'react-router-dom'





const History = () => {

    const location = useLocation() // 현재 경로를 가져옴
    const pathnames = location.pathname.split('/').filter((x) => x) // 경로를 '/'로 나누고 빈 문자열을 제거

    return (
        <>
        {pathnames.map((item, index) => {
            const routeTo = `${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1 // 현재 경로가 마지막 경로인지 확인
            return (
                <Box paddingLeft={'10px'}>
                    <Box key={index} isCurrentPage={isLast}>
                        <Link  as={ReactRouterLink} to={routeTo}>
                            <p>Pages / {item.charAt(0).toUpperCase() + item.slice(1)}</p>
                        </Link>
                    </Box>
                    <Heading key={index} to={routeTo}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Heading>
                </Box>
            )

        } )}
        
        </>
    )
}


export default History;
