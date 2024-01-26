// 컴포넌트 분리 파일명 작성시 첫글자는 대문자

// import
import styled from 'styled-components';
import Nav from './Nav';

// 헤더 일반 함수
function Header(propsHnav) {
    return (
    <Hd>
      <h1> 윤희 회사 </h1>
      <Nav nav = {propsHnav.nav} />
    </Hd>
    );
  }
  // const 컴포넌트명 = styled.태그이름`(백틱)
  const Hd = styled.header`
    height : 100px;
    background-color : yellowgreen;
    display : flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;`;


// 헤더파일 내보내기
export default Header;