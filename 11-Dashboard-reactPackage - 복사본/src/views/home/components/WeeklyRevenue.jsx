import { Card, CardBody, CardHeader, Flex,Stat,StatLabel} from "@chakra-ui/react"
import { faChartSimple} from "@fortawesome/free-solid-svg-icons";
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
                            <FontAwesomeIcon icon={faChartSimple} color='#422AFB' />
                    </Flex>
                </Stat>    
            </CardHeader>
            
                <LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
                
            
        </Card>
    )
}

export default WeeklyRevenue