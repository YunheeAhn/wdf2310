import { useRef, useState } from "react"
import TodoEditor from "../components/TodoEditor"
import TodoHd from "../components/TodoHd"
import TodoList from "../components/TodoList"

// 리스트 map
const mockTodo = [
    {
        id : 1,
        isDone : false,
        task : '할일1',
        createDate : new Date().getTime()
    },
    {
        id : 2,
        isDone : false,
        task : '할일2',
        createDate : new Date().getTime()
    },
    {
        id : 3,
        isDone : false,
        task : '할일3',
        createDate : new Date().getTime()
    }
]



const Todo = () => {
    // 할일 상태 변화 관리
    const [todos,setTodos] = useState(mockTodo)

    // <todolist추가하기>
    // 1. id관리 변수 생성,이미 존재 하는 목록의 id중 가장 큰 값 + 1 => 초기화
    const idRef = useRef(4)
    // 2. 할일 추가 하는 함수 생성
    const addTodo = (task) => {
        // 3. 새로운 할 일 객체 생성
        const newTodo = {
            id : idRef.current++,
            isDone : false,
            task,
            createDate : new Date().getTime(),
        }
        // 4. 기존에 있었던 내용에 추가하기
        setTodos([newTodo,...todos])
    }


    return (
        <>
            <TodoHd/>
            <TodoEditor addTodo={addTodo}/>
            {/* 5. 목록을 리스트에 보내기 */}
            <TodoList todo={todos}/>
        </>
    )
}

export default Todo