import { Box, Button, Card, CardBody, CardHeader, Flex, Stat, StatLabel, Text } from "@chakra-ui/react"
import { faChartSimple} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PieChart from '../../../components/charts/PieChart'
import { pieChartData, pieChartOptions } from '../../../components/variables/charts'
import { VSeparator } from "../../../components/separator/Separator";

const DataPoei = () => {
    return (
        <>
            <Card>
                <CardHeader >
                    <Stat>
                        <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'}>
                            <StatLabel color={'brand.200'}>PieChart</StatLabel>
                            <Button variant={"ghost"} >
                                <FontAwesomeIcon icon={faChartSimple} color='#422AFB' />
                            </Button>
                        </Flex>
                    </Stat>
                </CardHeader>
                <CardBody >
                    <Box h={'100%'} display={'flex'} flexDir={'column'} justifyContent={'space-between'}>
                        <Box h={'100%'}>
                            <PieChart chartData={pieChartData} chartOptions={pieChartOptions}/>
                        </Box>

                        <Flex justifyContent={'space-between'}>
                            <Flex flexDirection={'column'} alignItems={'center'} >
                                <Flex alignItems={'center'}>
                                    <Box w={'8px'} h={'8px'} borderRadius={'50%'} bg={'#422af8'} mr={'5px'}/>
                                    <Text fontSize={'14px'} color={'secondaryGray.600'}>Your Files</Text>
                                </Flex>
                                <Text fontSize={'20px'} fontWeight={700} color={'navy.700'}>63%</Text>
                            </Flex>
                            
                            <VSeparator />  
                                <Flex flexDirection={'column'} alignItems={'center'}>
                                    <Flex alignItems={'center'} >
                                        <Box w={'8px'} h={'8px'} borderRadius={'50%'} bg={'#6ad2ff'} mr={'5px'}/>
                                        <Text fontSize={'14px'} color={'secondaryGray.600'}>System</Text>
                                    </Flex>
                                    <Text fontSize={'20px'} fontWeight={700} color={'navy.700'}>25%</Text>
                                </Flex>
                        </Flex>
                    </Box>
                </CardBody>
            </Card>
        </>
    )
}

export default DataPoei