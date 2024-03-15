import { css } from "@emotion/css"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Timer = () => {
    // 초(seconds) 상태 관리하는 상태 값
    const [seconds,setSeconds] = useState(0)
    // 타이머를 없애는 상태 값
    const [isShow,setisShow] = useState(true)

    // 마운팅시 실행
    useEffect(() => {
        let interval

        // 타이머 표시 될 때
        if(isShow) {
            // 1초마다 1씩 증가
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1)
            },1000)
        }

        // 언마운팅시 실행
        return() => {
            if(interval) {
                clearInterval(interval) //타이머 종료
                console.log('타이머가 중지')
            }
        }
    },[isShow])

    // 타이머중지 되는 토글 이벤트 실행
    const handleTimer = () => {
        setisShow(false)
        setSeconds(0)
    }

    return(
        <>
        <br />
            <div  className={css`
                display : flex;
                flex-direction : column;
                align-items : center;
                border : 2px solid #ffaaaa;
                border-radius : 20px;
                padding : 30px;
            `}>
                <h2>useEffect 생명주기</h2>
                {isShow ? (
                    <div>
                        <p className={css`
                            color:white;
                            font-size : 20px;
                            text-align : center;

                            padding : 18px 33px;
                            background-color : pink;
                            border-radius : 15px;

                            width : auto;

                            margin-top : 60px;
                            margin-bottom : 60px;
                            `
                        }>{seconds}</p>
                        <CountBtnStyle onClick={handleTimer}>타이머 숨기기</CountBtnStyle>
                    </div>
                ) : (
                <CountBtnStyle onClick={()=>{setisShow(true)}}>타이머 보이기</CountBtnStyle>
                )}

            </div>
        </>
    )
}

export default Timer

const CountBtnStyle = styled.button`
    width: auto;
    padding: 3px 10px;
    border : none;
    border-radius : 20px;

    font-size : 20px;

    background : #ffaaaa;
    color : white;

`