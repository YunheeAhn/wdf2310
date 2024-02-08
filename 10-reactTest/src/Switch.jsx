import { useState } from "react"
import { Box, Image } from "@chakra-ui/react"

import switchOn from "./assets/images/switch-on.svg"
import switchoff from "./assets/images/switch-off.svg"
import switchImg from "./assets/images/switch@2x.png"



const Switch = () => {

    const [isClicked,setIsClicked] = useState(false)
    const [isClicked2,setIsClicked2] = useState(false)


    return (
        <>
            <h1>Switch Toggle 만들기</h1>

            <Image src={isClicked ? switchOn : switchoff} alt="switch" width={200} onClick={() => {setIsClicked(!isClicked)}} />
        
            <Box w={200} textAlign={"center"}>
                {isClicked ? "켜짐" : "꺼짐"}
            </Box>

            <Box onClick={() => {setIsClicked2(!isClicked2)}} w={400} h={200} bg={`url(${switchImg}) no-repeat 0 ${isClicked2 ? 0 : '-290px'}`}>

            </Box>
        </>
    )
}


export default Switch