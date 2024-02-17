import { Flex } from "@chakra-ui/react"


const IconBox = (props) => {
    const {icon, ...rest} = props;

    return (
        <Flex w={'52px'} h={'52px'} display={'flex'}  alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} {...rest}>
            {/* index.jsx의 아이콘 값 */}
            {icon}
        </Flex>
    )
}

export default IconBox