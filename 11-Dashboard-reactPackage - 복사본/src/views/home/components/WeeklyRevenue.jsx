import { Box, Button, Card, CardBody, CardHeader, Flex,Stat,StatLabel} from "@chakra-ui/react"
import { faChartSimple, faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from "../../../components/variables/charts";
// import ColumnChart from "../../../components/charts/BarChart";

import LineChart from "../../../components/charts/LineChart";
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from "../../../components/variables/charts";


const WeeklyRevenue = ( ) => {
    return (
        <Card ml={'10px'}>
            <CardHeader>
                <Stat>
                    <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'} >
                        <StatLabel color={'brand.200'}>This month</StatLabel>
                        <Box>
                            <Button variant={'ghost'} >
                                <FontAwesomeIcon icon={faPlus} color='#422AFB' />
                            </Button>
                        </Box>
                    </Flex>
                </Stat>    
            </CardHeader>

            <Box h={'100%'}>
                <LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
            </Box>
        </Card>
    )
}

export default WeeklyRevenue