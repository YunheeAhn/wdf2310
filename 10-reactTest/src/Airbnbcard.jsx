// 컴포넌트 분리 파일명 작성시 첫글자는 대문자
// 안윤희 연습중

// import
import styled from 'styled-components';

function CardAir (propsAir) {
    
    console.log(propsAir.air)
    
    return (
        <Sort>
            { propsAir.air.map((item, index) => {
                <AirIcon key={index.icon} />
            })}
                
            <AirTxt>
                <a href="/">방</a>
            </AirTxt>
        </Sort>
    )
}

const Sort = styled.ul`
height : 50px;
width : 50px;
display: flex;
flex-direction: column;
align-items: center;

border-radius : 10px;
box-shadow : 0 1px 1px ;

margin : 10px;
`

const AirTxt = styled.li`
color : #222222;
font-size : 13px;
font-weight : 900;
text-align : center;
text-decoration: none;

`

const AirIcon = styled.li`
height : 30px;
width : 30px;
display: flex;
justify-content: center;
align-items: center;
`



// 카드 파일 내보내기
export default CardAir;