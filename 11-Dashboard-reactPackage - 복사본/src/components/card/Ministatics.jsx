import { Card, Flex, Spacer, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";


const Ministatics = (props) => {
    const {startContent, name, value, endContent, growth} = props
    return (
        <Card py={'15px'} pl={'18px'} pr={'18px'} >
            <Flex my={'auto'} alignItems={'center'} >
                {startContent}
                <Stat ml={startContent ? '5' : '0'}>
                    <StatLabel color={'brand.200'}>{name}</StatLabel>
                    <StatNumber fontWeight={700} fontSize={'20px'} color={'key.base'}>{value}</StatNumber>
                    {growth ? <StatHelpText>{growth} </StatHelpText> : null}
                </Stat>
                
                <Spacer />
                {endContent}

            </Flex>
        </Card>
    )
}

export default Ministatics;