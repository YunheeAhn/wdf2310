// 컴포넌트 분리 파일명 작성시 첫글자는 대문자

// import
import styled from 'styled-components';


// 풋터 화살표 함수
const Footer = () => {
    return <Ft>footer</Ft>
  }
  // 풋터 컴포넌트
  const Ft = styled.footer`
    height : 100px;
    background-color : lightpink;`

    
export default Footer;