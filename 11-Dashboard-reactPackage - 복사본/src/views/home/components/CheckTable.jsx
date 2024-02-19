import { Card, CardHeader, Checkbox, Flex, Text } from "@chakra-ui/react"
import { Table,Thead,Tbody,Tr,Th,Td,TableContainer,} from '@chakra-ui/react'
import { faChartSimple} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tabledataCheck } from "../../../components/variables/tables";

const CheckTable = ( ) => {

    return (
        <>
            <Card ml={'10px'}>
                <CardHeader>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <Text color={'brand.200'}>This month</Text>

                            <FontAwesomeIcon icon={faChartSimple} color='#422AFB' />
                    </Flex>
                </CardHeader>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>PROGRESS</Th>
                            <Th>QUANTITY</Th>
                            <Th>DATE</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {tabledataCheck.map((row, index) => (
                                <Tr key={index}>
                                    <Td><Checkbox defaultChecked={row.checked}></Checkbox>{row.name}</Td>
                                    <Td>{row.progress}</Td>
                                    <Td>{row.quantity}</Td>
                                    <Td>{row.date}</Td>
                                </Tr>
                            ))}
                            
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>
        </>
    )
}

export default CheckTable