import { Box, Button, Card, CardBody, CardHeader, Flex, Stat, StatArrow, StatLabel, StatNumber, Text } from "@chakra-ui/react"
import { faChartSimple, faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Chart from 'react-apexcharts'
import React, { Component } from 'react'
import LineChart from '../../../components/charts/LineChart'
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from "../../../components/variables/charts";

class TotalSpent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {
                chart: {
                    id: 'basic-bar',
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                },
            },
            series: [
                {
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
            ],
        }
    }
    
    render () {
        return (
            <>
            <Card>
                <CardHeader>
                    <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'} width={'100%'} padding={0} >
                        
                        <Box alignItems={'center'} justifyContent={'space-between'} padding={0}>
                            <Button bg={'#edf2f7'} color={'brand.200'} display={'flex'}  alignItems={'center'} gap={'5px'} borderRadius={'10px'} >
                                <FontAwesomeIcon icon={faPlus} width={'16px'} height={'16px'} />
                                <Text fontSize={'14px'} fontWeight={500} color={'brand.200'}>This month</Text>
                            </Button>
                        </Box>
                        <Box>
                            <Button variant={'ghost'} >
                                <FontAwesomeIcon icon={faChartSimple} color='#422AFB' />
                            </Button>
                        </Box>
                    </Flex>
                </CardHeader>

                <CardBody display={'flex'} h={'200px'} >
                    <Flex w={'100%'}>
                        <Flex flexDir={'column'}>
                            <Stat>
                                <StatNumber pt={'20px'} fontSize={'30px'} color={'key.base'}>$37.5K</StatNumber>

                                <Box>
                                    <StatLabel pt={'8px'} color={'brand.200'}>Total Spent</StatLabel>
                                    <Box display={'flex'} alignItems={'center'} fontWeight={700} fontSize={'14px'} color={'#22c55e'}>
                                        <StatArrow type="increase"></StatArrow>
                                        <Text>+ 2.45%</Text>
                                    </Box>
                                </Box>
                            </Stat>
                        </Flex>

                        <Box w={'100%'}>
                            
                            <LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />

                            {/* <Chart options={this.state.options} series={this.state.series} type="line"  /> */}
                        </Box>
                    </Flex>
                </CardBody>
                
            </Card>

            </>
        )
    }
}
export default TotalSpent




