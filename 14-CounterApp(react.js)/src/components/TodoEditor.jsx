// <todolist추가하기>
// todo추가-5. Todo /views에서 만든 추가 함수 호출해오기

import { css } from "@emotion/css"
import { useRef, useState } from "react"
import styled from "styled-components"

const TodoEditor = ({addTodo}) => {
    // todo추가-6. task값 상태 변화 관리
    const [task, setTask] = useState('')

    // todo추가-7. 인풋버튼에 내용 업데이트 함수 생성
    const changeTask = (e) => {
        setTask(e.target.value)
    }
    // todo추가-8. 버튼 클릭시 업데이트 내용 호출
    const clickTaskBtn = () => {
        // todo추가-9. 할일이 입력되지 않으면 input에 포커스 맞춤
        if(!task) {
            // todo추가-10.현재 입력 안된 경우 할일 추가하지 않음
            inputRef.current.focus()
            return
        }
            // todo추가-11. 입력된 경우 할일추가
            addTodo(task)
            // todo추가-12. 할일 추가 한 후 인풋내용 초기화
            setTask('')
        
    }
    // todo추가-10-1. 빈 입력 방지 함수 생성
    // ->1-1에서 미리 연결 해둔 ref값인 inputRef 요소에 포커스
    const inputRef = useRef()

    // todo추가-11. Enter키 눌러서 값 추가하는 함수 생성하기
    const keyDown = (e) => {
        if(e.key==='Enter') {
            clickTaskBtn()
        }
    }


    return (
        <>
            <div className={css`
                text-align : center;
            `}>
                <h2>새로운 Todo 작성하기 ✏</h2>
                <div>
                    {/* todo추가-5-1. todo/views에서 추가한 idRef연결 */}
                    <TxtStyle onKeyDown={keyDown} ref={inputRef} onChange={changeTask} value={task} placeholder={"할일을 추가로 입력해주세요"} />
                    <CountBtnStyle onClick={clickTaskBtn}>추가</CountBtnStyle>
                </div>
            </div>
        </>
    )
}

export default TodoEditor

const CountBtnStyle = styled.button`
    width: auto;
    padding: 2px 5px;
    border : none;
    border-radius : 3px;

    margin-left : 10px;

    font-size : 16px;

    background : white;
    color : #ffaaaa;

`
const TxtStyle = styled.input`
    border : 0px;
    border-bottom : 3px solid #ffaaaa;
    width : 200px;
    font-size : 16px;
    padding : 5px;
`
