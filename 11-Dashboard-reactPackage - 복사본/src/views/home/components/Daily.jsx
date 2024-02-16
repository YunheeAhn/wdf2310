import { Box, Card, CardHeader, Flex, Stat, StatArrow, StatLabel, Text } from '@chakra-ui/react'

import ColumnChart from '../../../components/charts/BarChart'
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from '../../../components/variables/charts'
const Daily = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Stat>
                        <Flex display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'}>
                            <StatLabel color={'brand.200'}>Daily traffic</StatLabel>
                            <Flex alignItems={'center'}>
                                <StatArrow type="increase" ></StatArrow>
                                <Text color={'#22c55e'}>+2.45%</Text>
                            </Flex>
                            
                        </Flex>
                        <Flex alignItems={'flex-end'}> 
                            <Text lineHeight={'40px'} fontSize={'36px'} fontWeight={700} color={'navy.700'}>2.579</Text>
                            <Text>Visitors</Text>
                        </Flex>
                    </Stat>
                </CardHeader>
                <Box h={'300px'}>
                    <ColumnChart chartData={barChartDataDailyTraffic} chartOptions={barChartOptionsDailyTraffic}/>
                </Box>
            </Card>
        </>
    )
}
export default Daily