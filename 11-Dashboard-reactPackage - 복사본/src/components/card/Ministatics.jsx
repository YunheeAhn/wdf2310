import { Box, Card, Flex, Spacer, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ministatics = () => {
    return (
        <Card py={'15px'} pl={'18px'} pr={'18px'}>
            <Flex my={'auto'} >
                <Box w={'52px'} h={'52px'} bg={'bgDefault'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'}>
                    <FontAwesomeIcon icon={faChartSimple} color='#422AFB' />
                </Box>
                <Stat ml={5}>
                    <StatLabel>Earnings</StatLabel>
                    <StatNumber>$340.5</StatNumber>
                </Stat>
                <Spacer />
                
            </Flex>
        </Card>
    )
}

export default Ministatics;