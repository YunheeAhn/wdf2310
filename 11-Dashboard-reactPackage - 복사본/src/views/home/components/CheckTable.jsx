import { Box, Button, Card, CardHeader, Checkbox, Flex, Text } from "@chakra-ui/react"
import { Table,Thead,Tbody,Tr,Th,Td,TableContainer,} from '@chakra-ui/react'
import { faEllipsis} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSortBy, useTable } from "react-table";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const CheckTable = ( ) => {
    const data = React.useMemo(() => columnsData, [])

    const columns = React.useMemo(
        () =>[
            {
                Header: '',
                accessor: 'checked',
                disableSortBy: true, // 체크박스 열은 정렬 비활성화
                Cell: ({ value }) => <Checkbox isChecked={value} />,
            },
            {
                Header: 'NAME',
                accessor: 'name',
                
            },
            {
                Header: 'PROGRESS',
                accessor: 'progress',
            },
            {
                Header: 'QUANTITY',
                accessor: 'quantity',
            },
            {
                Header: 'DATE',
                accessor: 'date',
            },
        ],
        []
    )

    const checkTableInstance = useTable({columns, data} useSortBy)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = checkTableInstance
    return (
        <>
            <Card >
            <CardHeader>
                    <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'} >
                        <Text fontSize={'20px'} fontWeight={700} color={'navy.700'}>Check Table</Text>
                        <Box>
                            <Button variant={'ghost'} >
                                <FontAwesomeIcon icon={faEllipsis} color='#422AFB' />
                            </Button>
                        </Box>
                    </Flex>
            </CardHeader>
                <TableContainer>
                    <Table variant='simple'>
                    <Thead>
                        {/* 헤더 그룹 렌더링 */}
                        {headerGroups.map((headerGroup) => (
                            // 헤더 그룹에 필요한 props
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <Th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        isNumeric={column.isNumeric}
                                    >
                                        {column.render('Header')}
                                        {/* 정렬 방향 표시 */}
                                        {column.isSorted ? column.isSortedDesc ? <FaAngleDown /> : <FaAngleUp /> : ''}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                        <Tbody {...getTableBodyProps()}>
                            {row.map((row) => {
                                prepareRow(row)
                                return (
                                    <Tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                                                    {cell.render('Cell')}
                                                </Td>
                                            )
                                        })}    
                                    </Tr>
                                    )
                                })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>
        </>
    )
}

export default CheckTable