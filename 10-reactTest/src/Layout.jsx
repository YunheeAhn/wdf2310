
import CardAir from './Airbnbcard';
import Article from './Article';
import Footer from './Footer';
import Header from './Header';
import Nav, { NavMobile } from './Nav';
import { LuBedDouble } from "react-icons/lu";
import { GiStripedSun } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa6";

import logo from './logo.svg'; // <-이미지 사용하는 방법
import Comments from './Ccoments';
import Sort from './Sort';
import Comment from './Comment';
// import Comments from './_Ccoments';


// 컴포넌트 만들기



function Layout() { // App이라는 기명 함수 선언

  // const airbnb = [
  //   {text : '방', icon : <LuBedDouble/>},
  //   {text : '최고의 전망', icon : <GiStripedSun />},
  //   {text : '해변근처', icon : <FaUmbrellaBeach />},
  //   {text : '국립공원', icon : },
  //   {text : '한옥', icon : },
  //   {text : '한적한 시골', icon : },
  //   {text : '멋진 수영장', icon : },
  //   {text : '캠핑장', icon : }
  // ]
  
  const navDeskArr = [
    {title : 'd-html'},
    {title : 'd-css'},
    {title:'d-Javascript'},
    {title : 'd-React'},
    {title : 'd-node.js'},
    {title : 'd-jsx'},
    {title : 'd-vue.js'}
  ]
    // Navemobile props만들기
    const navMobileArr = [
        {title : 'html'},
        {title : 'css'},
        {title : 'javascript'},
        {title : 'React'},
        {title : 'node.js'},
        {title : 'jsx'},
        {title : 'vue.js'}
    ]
// return ( // 함수 속 내용을 모두 반환
  return ( 
    // return 내부에는 하나의 태그만 존재해야 한다.
    // 여러개의 태그를 사용 하고 싶다면 (<></>) 를 사용한다
    // 또는 <Fragment></Fragment>를 사용한다
  <div className="wrap">
    <Header nav = {navDeskArr} />
      
      <NavMobile nav = {navMobileArr} />
      
      <Sort />
      <Article title="Html이란?" desc="첫번째 아티클 내용은 이렇습니다. 이러이러해서 이렇게 되었고, 또 이렇게 하겠습니다." />
      <Article title="Css란?" desc="두번째 아티클 내용은 이렇습니다. 이러이러해서 이렇게 되었고, 또 이렇게 하겠습니다." />
      <Article title="Javascript란?" desc="세번째 아티클 내용은 이렇습니다. 이러이러해서 이렇게 되었고, 또 이렇게 하겠습니다." />
      <Footer/>
    
  </div>
  );
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}


export default Layout; // Layout.jsx파일을 Layout이라는걸로 모듈화 하여 내보내기
