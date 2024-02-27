import { Card, CardHeader, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import React from "react"
import { useTable } from "react-table"


const RTChart = () => {
    const data = React.useMemo(
        () => [

        ],
        []
        )

    const columnData = React.useMemo(
            () => [
            { 
                accessor : 'marketName',
                header : 'Name'},
            {   
                accessor : 'QUANTITY',
                header : 'Status' },
            {  
                accessor : 'date',
                header : 'quantity'},
            {   
                accessor : 'progress',
                header : 'Progress'},

            ],
            []
        );
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columnData, data })

    return (
        <>
            <Card>
                <CardHeader>React Table 라이브러리 사용하기</CardHeader>
                <TableContainer>
                    <Table {...getTableProps}>
                        <Thead>
                            {headerGroups.map((headerGroup) => (
                                <Tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((columnData) => (
                                    <Th {...columnData.getHeaderProps()} isNumeric={columnData.isNumeric}>
                                        {columnData.render('Header')}
                                    </Th>
                                    ))}
                                </Tr>
                            ))}
                        </Thead>
                        <Tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
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

export default RTChart