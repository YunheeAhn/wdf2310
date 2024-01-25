import React from 'react'; //리액트 사용 선언
import ReactDOM from 'react-dom/client'; //리액트돔 사용 선언
// import './index.css'; // index.css 사용 선언
import App from './App'; // App모듈 사용 선언
// import reportWebVitals from './reportWebVitals'; // 리엑트 애플리케이션의 성능측정 및 모니터링, 없어도 됨


// 루트는 있어야 함
const root = ReactDOM.createRoot(document.getElementById('root')); // document의 root라는 아이디 값을 가진 아이 한테
root.render( // 렌더를 한다 무엇을?
  <React.StrictMode>
    <App />  
    {/* // 모듈화 한 App.js를 렌더 */}
  </React.StrictMode> // React.StrictMode 리엑트라이브러리가 제공하는 개발 모드, 에러나면 에러를 알려줌
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); // 리엑트 애플리케이션의 성능측정 및 모니터링, 없어도 됨
