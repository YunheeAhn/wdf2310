import { useState } from "react"

const Headerr = (props) => {
    const handleClick = (e) => {
        alert(e.target.name)
        console.log(e.target.name)
    }
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.cont} 컴포넌트 입니다</p>

            <button onClick={handleClick} name="확인">핸들클릭 확인 버튼</button>
            <button onClick={handleClick} name="취소">핸들클릭 취소 버튼</button>
        </>
    )
}

const Bodyy = ({title,cont}) => {
    // 구조분해 할당 함
    return (
        <>
            <h1>{title}</h1>
            <p>{cont} 입니다</p>
        </>
    )
}

const Organizing = () => {

    const user = {
        name : 'john',
        age: 20,
    }

    const arr = [1,2,3,4,5]

    const num = 12

    const clickOn = () => {
        console.log('버튼 눌렀다~~')
    }


    // const [] = useState(초기값)
    const [count, setCount] = useState(0)

    const [count2,setCount2] = useState(0)
    const increase = () => {
        setCount2(count2 + 1)
    }


    return (
        <>
        <hr />
        <Headerr title="헤더" cont="헤더 내용"/>
        <Bodyy title="바디" cont="바디 내용" />

            <div>
                <h1>JSX정리</h1>
                <p>{user.name}의 나이는 {user.age}살 입니다 -- 객체 출력</p>
                <p>나는 {arr[2]}살 입니다 -- 배열출력</p>
                <p>{num}은 {num % 2 === 0 ? '짝수' : '홀수' } 입니다. -- 삼항연산자</p>
                <p>{num}은 {num % 2 === 0 && num > 10 ? '짝수&두자리' : '한자리이면서 홀수' } 입니다. -- 삼항연산자 and연산자</p>
                <p>{num}은 {num % 2 === 0 || num > 10 ? '짝수or두자리' : '한자리이면서 홀수' } 입니다. -- 삼항연산자 or연산자</p>

                <p>map함수</p>
                <div>
                    {arr.map((value,index) => ( 
                        <p key={index}> {value} </p>
                    ))}
                </div>

                <p>버튼 클릭 이벤트 생성하기</p>
                <button onClick={clickOn}>버튼</button>

                <p>useState 훅 사용하기 - 상태값</p>
                <p>버튼 클릭하면 count +1 증가 시키기</p>
                <p>1 증가 : {count}</p>
                <button onClick={() => setCount(count + 1)}> 증가</button>
                <p>1씩 증가 : {count2}</p>
                <button onClick={increase}> 1씩증가</button>

                <button onClick={() => {setCount(0)}}> setCount 초기화 </button>
                <button onClick={() => {setCount2(0)}}> setCount2 초기화 </button>

            </div>
        </>
    )
}

export default Organizing;