import { useState } from "react";
import Btntoggle from "./Buttontoggle";
import Comments from "./Ccoments";
import Event from "./Event";
import JoinSign from "./Joinsign";
import Layout from "./Layout";
import Organizing from "./Organizing";
import Product from "./Product";
import SetNumber from "./Setnumber";
import State from "./State";
import Switch from "./Switch";

function App() { 

  const [user, setUser] = useState({
    name: '',
    gender : '',
    age : '',
    intro : ''
  })
  
  return ( 
    <>
    {/* 정리 컴포넌트 아래꺼 */}

    <Organizing />
    <hr />
    <JoinSign user={user} setUser={setUser} />
    <hr />
    <Switch />
    <hr />
    <Btntoggle />
    <hr />
    <SetNumber />
    <hr />
    <State />
    <hr />
    <Event />
    <hr />
    <Product />
    <hr />
    <Comments />



    {/* 부모컴포넌트 Cat */}
      <Cat type="고양이" name="가을이" age="2"/>
      {/* {name : '가을', age : 2} 객체가 Cat컴포넌트로 전달 */}
      <Cat type="고양이" name="겨울이" age="3" />
      <Cat type="고양이" name="봄이" age="4" />
      <Cat type="고양이" name="여름이" age="6" />

      <Layout/>
    </>
  );
}

// 자식 컴포넌트 Cat
const Cat = (props) => {
  // const props = {name : '겨울' ,age : 2}
  const { name, age, type } = props; // 데이터 구조분해 할당
  return (
    <>
      <div>{type}인 {name}는 나이는 {age}살입니다</div>

    </>
  )
}

export default App; // App.js파일을 App이라는걸로 모듈화 하여 내보내기
