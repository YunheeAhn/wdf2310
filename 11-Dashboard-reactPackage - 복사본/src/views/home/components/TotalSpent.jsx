import { Box, Button, Card, CardBody, CardHeader, Flex, Spacer, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"
import { faChartSimple} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from 'react-apexcharts'
import React, { Component } from 'react'


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
            <Card ml={'10px'}>
                <Stat> 
                    <CardHeader>
                        <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'} >
                            <Box>
                                <Button>
                                    <StatLabel color={'brand.200'}>This month</StatLabel>
                                </Button>
                            </Box>
                            <Box>
                                <FontAwesomeIcon icon={faChartSimple} color='#422AFB' />
                            </Box>
                        </Flex>
                    </CardHeader>
                    <Flex>
                        <Box>
                            <StatNumber color={'key.base'}>$37.5K</StatNumber>
                            <StatLabel color={'brand.200'}>Total Spent</StatLabel>
                            <StatHelpText>
                            <StatArrow type="increase" />
                                $37.5K
                            </StatHelpText>
                        </Box>

                        <CardBody>
                                <Chart options={this.state.options} series={this.state.series} type="line" />
                        </CardBody>
                    </Flex>
                </Stat>
            </Card>

            </>
        )
    }
}
export default TotalSpent




