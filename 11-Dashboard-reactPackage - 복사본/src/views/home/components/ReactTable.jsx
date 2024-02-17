import React from 'react'
import { useTable, useSortBy } from 'react-table'
import { Box, Button, Card, CardHeader, Checkbox, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import { columnsData } from '../../../components/variables/columnData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const RTChart = () => {
    const data = React.useMemo(() => columnsData, [])
        

    const columns = React.useMemo(
        () => [
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
    
    // useTable 훅을 사용하여 테이블 인스턴스 생성
    // useSortBy 훅을 사용하여 정렬 기능 추가
    const tableInstance = useTable({ columns, data }, useSortBy)

    // 테이블 인스턴스에서 필요한 속성 추출
    // getTableProps: 테이블 요소에 필요한 props
    // getTableBodyProps: 테이블 바디 요소에 필요한 props
    // headerGroups: 헤더 그룹에 대한 정보
    // rows: 테이블 데이터
    // prepareRow: 행에 필요한 props
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <Card>
            <CardHeader>
                    <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'} >
                        <Text fontSize={'20px'} fontWeight={700} color={'navy.700'}>React Table</Text>
                        <Box>
                            <Button variant={'ghost'} >
                                <FontAwesomeIcon icon={faEllipsis} color='#422AFB' />
                            </Button>
                        </Box>
                    </Flex>
            </CardHeader>
            <TableContainer>
                <Table variant="simple" {...getTableProps()}>
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
    )
}

export default RTChart