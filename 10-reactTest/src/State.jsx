import { useState } from "react"

const State = () => {
    // 이름 바꾸기 버튼 누를때마다 값 바꾸기

    // 1. 바닐라 자바스크립트에서 사용하기
    // (// name이라는 변수 설정
    //     let myName = "겨울"

    // const changeName = () => {

    //     // 바닐라 자바스크립트용 버튼 이름 바꾸기 =>
        

    //     // (console.log('클릭')

    //     // // 삼항연산자로
    //     // // 조건? 참일때 출력 값 : 거짓일때 출력 값
    //     // myName = myName === '겨울'? '가을':'겨울'

    //     // console.log(myName)

    //     // // h1 태그에 innerText 이용하여 출력
    //     // // element.innerText = text
    //     // document.querySelector('.h2').innerText = myName)

    //     })

    // ----------------------------------------------------------------------------------

    // 2. 리액트에서 usestate : 상태값을 저장 할 수 있는 변수를 생성하는 함수 사용하기
    // 구문 :  const [상태이름, 상태변경함수] = useState(상태의 초기값)
    const [name, setName] = useState("겨울")

    const changeName = () => {
        // setMyName : 상태변경 함수
        // 상태변경함수(상태값)
        // 상태값을 변경 하면 컴포넌트가 다시 랜더링
        setName(name === "겨울" ? "가을" : "겨울");
        
    }

    return (
        <>
            <p>State컴포넌트-usestate</p>

            <h1>{name}</h1>
            <button onClick={changeName}>이름 바꾸기</button>
            

        </>
    )
}

export default State