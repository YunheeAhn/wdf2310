import React, { useEffect, useRef, useState } from "react"
import Counter from "../components/Counter"
import Viewer from "../components/Viewer"


import { css } from '@emotion/css'
import Timer from "../components/Timer"
import styled from "styled-components"

const Home = () => {

    const [count, setCount] = useState(0)

    const handleSetCount = (value) => {
    setCount(count + value)
    }
    
    const [txt,setTxt] = useState('')
    const changeTxt = (e) => {
        setTxt(e.target.value)
    }

    useEffect(() => {
        console.log('업데이트',count,txt)
    },[count,txt])


    const [color,setColor] = useState('white')

    useEffect(() => {
        document.body.style.backgroundColor = color
        document.body.id='countApp'
        document.body.classList.add('countApp')

        return () => {
        document.body.style.background = 'white'
        document.body.id = ''
        document.body.classList.remove('countApp')

        }
    },[color])

    const toggleColor = () => {
        setColor((prevColor) => (prevColor === 'white' ? 'lightyellow' : 'white'));
    };


    const didMount = useRef(false)

    // 마운팅 시 콘솔창에 출력
    useEffect(() => {
        if(!didMount.current===true) {
            // 마운팅 시
            // 처음 useRef값이 거짓 일 때 참 값으로 변경
            didMount.current = true
            return
        } else {
            // 업데이트 시
            console.log('업데이트')
        }
    },[color])

    return (
        <div className={css`
            display : flex;
            flex-direction : column; 
            align-items : center;  
            margin : 0 auto;
        ` }>
            {/* 배경색 */}
            <button className={css`
                width : 100px;
                height : 30px;
                margin : 10px`
                } onClick={toggleColor}>color change
            </button>

            <Viewer count={count}/>

            <input type="text" onChange={changeTxt} value={txt} className={css`
                margin-bottom : 20px;
                border : 3px dashed lightpink;

                width : 250px;
                height : 25px;

                border-radius : 12px;
            `}></input>

            <Counter handleSetCount={handleSetCount}/>

            <div className={css`
                display : flex;
                gap : 10px;
                margin-top : 20px;
            `}>
                <Timer/>

                <br />
                <div className={css`
                    display : flex;
                    flex-direction : column;
                    align-items : center;
                    border : 2px solid #ffaaaa;
                    border-radius : 20px;
                    padding : 30px;
                `}>
                    <h2>useEffect연습하기</h2>
                    <p className={css`
                        color:white;
                        font-size : 20px;

                        padding : 18px 33px;
                        background-color : pink;
                        border-radius : 15px;

                        width : auto;

                        margin-top : 60px;
                        margin-bottom : 60px;
                        `
                    }>{count}</p>
                    <CountBtnStyle onClick={() => {
                        setCount(count + 1)
                    }}>1씩 증가</CountBtnStyle>
                </div>
            </div>

        </div>

        
    );
}

export default Home

const CountBtnStyle = styled.button`
    width: auto;
    padding: 3px 10px;
    border : none;
    border-radius : 20px;

    font-size : 20px;

    background : #ffaaaa;
    color : white;

`