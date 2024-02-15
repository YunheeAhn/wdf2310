import { Card, CardHeader, Flex, Stat, StatLabel } from "@chakra-ui/react"

const PieChart = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Stat>
                        <Flex>
                            <StatLabel>PieChart</StatLabel>
                        </Flex>
                    </Stat>
                </CardHeader>
            </Card>
        </>
    )
}

export default PieChart