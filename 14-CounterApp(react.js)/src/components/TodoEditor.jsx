// <todolist추가하기>
// 1. Todo /views에서 만든 추가 함수 호출해오기

import { useRef, useState } from "react"

const TodoEditor = ({addTodo}) => {
    // 2. task값 상태 변화 관리
    const [task, setTask] = useState('')

    // 3. 인풋버튼에 내용 업데이트 함수 생성
    const changeTask = (e) => {
        setTask(e.target.value)
    }
    // 4. 버튼 클릭시 업데이트 내용 호출
    const clickTaskBtn = () => {
        // 6. 할일이 입력되지 않으면 input에 포커스 맞춤
        if(!task) {
            // 7.현재 입력 안된 경우 할일 추가하지 않음
            inputRef.current.focus()
            return
        }
            // 8. 입력된 경우 할일추가
            addTodo(task)
            // 9. 할일 추가 한 후 인풋내용 초기화
            setTask('')
        
    }
    // 5. 빈 입력 방지 함수 생성
    // ->1-1에서 미리 연결 해둔 ref값인 inputRef 요소에 포커스
    const inputRef = useRef()

    // 10. Enter키 눌러서 값 추가하는 함수 생성하기
    const keyDown = (e) => {
        if(e.key==='Enter') {
            clickTaskBtn()
        }
    }


    return (
        <>
            <div>
                <h2>새로운 Todo 작성하기 ✏</h2>
                <div>
                    {/* 1-1. todo/views에서 추가한 idRef연결 */}
                    <input onKeyDown={keyDown} ref={inputRef} onChange={changeTask} value={task} placeholder={"할일을 추가로 입력해주세요"} />
                    <button onClick={clickTaskBtn}>추가</button>
                </div>
            </div>
        </>
    )
}

export default TodoEditor