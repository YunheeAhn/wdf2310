import { Box, Button, Card, CardHeader, Flex, Progress, Stat, StatLabel, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { faCircleCheck, faCircleExclamation,faCircleXmark, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { complexDataTable } from "../../../components/variables/tables"

const ComplexTable = () => {
    const statIcons = {
        Approved: <FontAwesomeIcon icon={faCircleCheck} color="green" />,
        Error: <FontAwesomeIcon icon={faCircleExclamation} color="orange" />,
        Disable: <FontAwesomeIcon icon={faCircleXmark} color="red" />
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <Stat>
                        <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'} >
                            <StatLabel color={'brand.200'}>Complex Table</StatLabel>
                            <Box>
                                <Button variant={'ghost'} >
                                <FontAwesomeIcon icon={faEllipsis} color='#422AFB' />
                                </Button>
                            </Box>
                        </Flex>
                    </Stat>
                </CardHeader>
                <TableContainer>
                <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>NAME</Th>
                                <Th>STATUS</Th>
                                <Th>DATE</Th>
                                <Th>PROGRESS</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {complexDataTable.map((row, index) => (
                                <Tr key={index}>
                                    <Td>{row.name}</Td>
                                    <Td>
                                        <Flex gap={1} alignItems={'center'}>
                                            {statIcons[row.status]}
                                            {row.status}
                                        </Flex>
                                        
                                    </Td>
                                    <Td>{row.date}</Td>
                                    <Td>
                                        <Progress value={parseFloat(row.progress)}/>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>
        </>
    )
}

export default ComplexTable