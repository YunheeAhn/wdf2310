import { Card, CardHeader, Flex, Stat, StatLabel } from "@chakra-ui/react"

const Daily = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Stat>
                        <Flex>
                            <StatLabel>Daily</StatLabel>
                        </Flex>
                    </Stat>
                </CardHeader>
            </Card>
        </>
    )
}


export default Daily