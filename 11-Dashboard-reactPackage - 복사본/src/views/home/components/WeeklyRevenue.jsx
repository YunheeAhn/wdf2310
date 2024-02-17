import { Box, Button, Card, CardHeader, Flex, Text} from "@chakra-ui/react"
import { faChartSimple} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from "../../../components/variables/charts";
// import ColumnChart from "../../../components/charts/BarChart";

import BarChart from "../../../components/charts/BarChart";
import { barChartDataConsumption, barChartOptionsConsumption } from "../../../components/variables/charts";


const WeeklyRevenue = ( ) => {
    return (
        <Card>
            <CardHeader>
                    <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'} >
                        <Text fontSize={'18px'} fontWeight={700} color={'navy.700'}>Weekly Revenue</Text>
                        <Box>
                            <Button variant={'ghost'} >
                                <FontAwesomeIcon icon={faChartSimple} color='#422AFB' />
                            </Button>
                        </Box>
                    </Flex>
            </CardHeader>

            <Box h={'100%'}>
                <BarChart chartData={barChartDataConsumption} chartOptions={barChartOptionsConsumption} />
            </Box>
        </Card>
    )
}

export default WeeklyRevenue