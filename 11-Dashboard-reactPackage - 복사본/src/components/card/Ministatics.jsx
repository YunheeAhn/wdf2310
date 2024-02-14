import { Card, Flex, Spacer, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";


const Ministatics = (props) => {
    const {startContent, name, value, endContent, growth} = props
    return (
        <Card py={'15px'} pl={'18px'} pr={'18px'}>
            <Flex my={'auto'} >
                {startContent}
                <Stat ml={startContent ? '5' : '0'}>
                    <StatLabel color={'brand.200'}>{name}</StatLabel>
                    <StatNumber color={'key.base'}>{value}</StatNumber>
                {growth ? (
                    <Text>{growth}</Text>
                ) : null}
                </Stat>
                
                <Spacer />
                {endContent}

            </Flex>
        </Card>
    )
}

export default Ministatics;