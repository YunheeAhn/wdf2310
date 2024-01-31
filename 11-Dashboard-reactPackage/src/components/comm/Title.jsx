import { Heading } from "@chakra-ui/react"



const Title = (props) => {
    return (
        <Heading as="h3" fontSize={20} color={'#222'} fontWeight={900}>
            {props.children}
        </Heading>
    )
}

export default Title;

export const TitleH4 = (props) => {
    return (
        <Heading as="h4" fontSize={16} color={'#333'} fontWeight={600} padding={'3px'}>
            {props.children}
        </Heading>
    )
}



