// 컴포넌트 분리 파일명 작성시 첫글자는 대문자

// import
import styled from 'styled-components';

// 아티클 화살표 함수
const Article = (propsArticle) => {
    const { title, desc } = propsArticle
    return (
    <At>
        <h2>{title}</h2>
        <p>{desc}</p>
    </At>
    );
  }


  // 아티클 컴포넌트
  const At = styled.article`
    height : 500px;
    background-color : #C7C7C7`
    
  
export default Article;
  