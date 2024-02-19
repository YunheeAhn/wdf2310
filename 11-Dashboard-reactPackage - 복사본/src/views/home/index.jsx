// 첫페이지

import { SimpleGrid, VStack } from "@chakra-ui/react";
import Ministatics from "../../components/card/Ministatics";
import IconBox from "../../components/icons/IconBox";
import { faChartSimple, faHouse, faPaste, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TotalSpent from "./components/TotalSpent";
import WeeklyRevenue from "./components/WeeklyRevenue";
import CheckTable from "./components/CheckTable";
import Daily from "./components/Daily";
import DataPoei from "./components/DataPoei";
import RTChart from "./components/ReactTable";
import ComplexTable from "./components/ComplexTable"; 
import TaskTable from "./components/Tasktable";
import MiniCalendar from "../../components/calendar/MiniCalendar";




const Home = () => {
    return (
        <>
        
        <VStack spacing="10px" ml={'10px'} width={'100%'} >
            <SimpleGrid columns={{base : 1,md : 2,xl : 6}} spacing={'10px'} width={'100%'}>
                <Ministatics name="Earnings" value='$350.4' startContent={
                    <IconBox w={'52px'} h={'52px'} bg={'bgDefault'} icon={<FontAwesomeIcon icon={faChartSimple} color='#422AFB' />} />
                } />
                <Ministatics name="Spend this month" value='$642.39' startContent={
                    <IconBox w={'52px'} h={'52px'} bg={'bgDefault'} icon={<FontAwesomeIcon icon={faPaste} color='#422AFB' />} />
                } /> 
                <Ministatics growth="4.28%" name="Sales" value='$574.34' startContent={
                    <IconBox w={'52px'} h={'52px'} bg={'bgDefault'} icon={<FontAwesomeIcon icon={faChartSimple} color='#422AFB' />} />
                } /> 
                <Ministatics name="Your Balance" value='$1000' 
                    endContent={
                        <IconBox w={'52px'} h={'52px'} bg={'bgDefault'} pl={'auto'} icon={<FontAwesomeIcon icon={faQrcode} color='#422AFB' />} />
                    }/> 
                <Ministatics name="New Tasks" value='145' startContent={
                    <IconBox w={'52px'} h={'52px'} bg={'bgDefault'} icon={<FontAwesomeIcon icon={faChartSimple} color='#422AFB' />} />
                } /> 
                <Ministatics name="Total Projects" value='$2433' startContent={
                    <IconBox w={'52px'} h={'52px'} bg={'bgDefault'} icon={<FontAwesomeIcon icon={faHouse} color='#422AFB' />} />
                } /> 
                
            </SimpleGrid>
            
            <SimpleGrid columns={{base : 1,md : 2}} spacing={'10px'} width={'100%'}>
                <TotalSpent bg={'tomato'} height={'90px'}>1</TotalSpent>
                <WeeklyRevenue bg={'tomato'} height={'90px'}></WeeklyRevenue>
            </SimpleGrid>

            <SimpleGrid columns={{base : 1,md : 2}} spacing={'10px'} width={'100%'}>
                <CheckTable bg={'tomato'} height={'90px'}></CheckTable>
                <SimpleGrid columns={{base : 1,md : 2}} spacing={'10px'} width={'100%'}>
                <Daily bg={'tomato'} height={'90px'}></Daily>
                <DataPoei bg={'tomato'} height={'90px'}></DataPoei>
                </SimpleGrid>
            </SimpleGrid>

            <SimpleGrid columns={{base : 1,md : 2}} spacing={'10px'} width={'100%'}>
                {/* 리액트테이블라이브러리사용하기 */}
                <RTChart bg={'White'} height={'90px'}></RTChart> 
                <RTChart bg={'White'} height={'90px'}></RTChart> 
            </SimpleGrid>

            <SimpleGrid columns={{base : 1,md : 2}} spacing={'10px'} width={'100%'}>
                <ComplexTable bg={'White'} height={'90px'}></ComplexTable> 
                <SimpleGrid columns={{base : 1,md : 2}} spacing={'10px'} width={'100%'}>
                    <TaskTable bg={'White'} height={'90px'}></TaskTable>
                    <MiniCalendar bg={'White'} height={'90px'}></MiniCalendar> 
                </SimpleGrid>
            </SimpleGrid>
        </VStack>

        </>
    )
}



export default Home;