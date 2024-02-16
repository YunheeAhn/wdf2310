import { useState } from "react"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import styled from "styled-components"
import { Box } from "@chakra-ui/react"

const Btntoggle = () => {

    // const [배열변수1,배열변경된변수2] = useState(초기값) 
    const [istoggled, setIsToggled] = useState(true)


    return (
        <>
            <div id="gnb" istoggled={istoggled} >
                <button onClick={() => {setIsToggled(!istoggled)}}>
                    <FontAwesomeIcon icon={istoggled ? faXmark : faBars} />
                    <span className="blind">전체메뉴보기</span>
                </button>

                <Box as="ul" display={istoggled ? "block" : "none"} border={'1px solid #ff3399'} bgColor={'coral'}>
                    <li>I Mac</li>
                    <li>Macbook</li>
                    <li>Ipad</li>
                    <li>Iphone</li>
                    <li>Apple Watch</li>
                    <li>Vision Pro</li>
                    <li>Apple Music</li>
                    <li>고객지원</li>
                </Box>
            </div>
        </>
    )
}

 /* display : ${(props) => (props.istoggled ? "block" : "none")}; */
// const MenuStyle = styled.div`
//     .header__menulist {
//         display : ${({istoggled}) => (istoggled ? 'block' : 'none')};
//         max-width : 100px;
//         padding : 20px;
//         border-radius : 4px;
//         background-color : #ffbf00;
//         border : 1px solid #ffbf00;
//     }
    
// `


export default Btntoggle