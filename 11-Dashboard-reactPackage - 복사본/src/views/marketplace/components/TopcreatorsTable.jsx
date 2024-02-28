import { Button, Card, CardHeader, Flex, Progress, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { topcreatorTable } from "../../../components/variables/topcreatoprTable";

const TopcreatorsTable = () => {
    return (
        <>
            <Card padding={0}>
                <CardHeader padding={'16px'} pb={'20px'}>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Text color={'navy.700'} fontSize={'18px'} fontWeight={700}>Top Creators</Text>
                        <Button  color={'navy.650'} borderRadius={'30px'}>
                            See all
                        </Button>
                    </Flex>
                </CardHeader>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>NAME</Th>
                                <Th>ARTWORKS</Th>
                                <Th>RATING</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {topcreatorTable.map((row,index) => (
                                <Tr key={index}>
                                    <Td>{row.name}</Td>
                                    <Td>{row.artworks}</Td>
                                    <Td>
                                        <Progress value={parseFloat(row.rating)}/>
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

export default TopcreatorsTable;