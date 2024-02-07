import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import styled from "styled-components"

const Btntoggle = () => {

    const [istoggled, setIsToggled] = useState(true)


    return (
        <>
            <MenuStyle id="gnb" istoggled={istoggled} >
                <button onClick={() => {setIsToggled(!istoggled)}}>
                    <FontAwesomeIcon icon={istoggled ? faXmark : faBars} />
                    <span className="blind">전체메뉴보기</span>
                </button>

                <ul className="header__menulist">
                    <li>I Mac</li>
                    <li>Macbook</li>
                    <li>Ipad</li>
                    <li>Iphone</li>
                    <li>Apple Watch</li>
                    <li>Vision Pro</li>
                    <li>Apple Music</li>
                    <li>고객지원</li>

                </ul>
            </MenuStyle>
        </>
    )
}

const MenuStyle = styled.div`
    .header__menulist {
        display : ${(props) => (props.istoggled ? "block" : "none")};
        max-width : 100px;
        padding : 20px;
        border-radius : 4px;
        background-color : #ffbf00;
        border : 1px solid #ffbf00;
    }
    
`


export default Btntoggle