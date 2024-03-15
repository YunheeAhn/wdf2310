import { useState } from "react"
import TodoItem from "./TodoItem"

const TodoList = ({todo}) => {
    // < 검색어 입력 하기 관리>
    // 1. 검색어 상태 변화 관리
    const [search,setSearch] = useState('')
    // 2. input에 입력된 검색어로 상태 관리
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }
    // 3. 검색어 포함하는 할일 목록 저장
    const getSearchTodo = () => {
        // 3-1. 검색어 포함된 목록 반환
        // 3-2. todo.task에 검색어 포함되어 있는지 확인
        // 3-3. 대소문자 구분X
        return todo.filter((todo) => todo.task.toLowerCase().includes(search.toLowerCase())) 
    }

    // 4. 대소문자 구문 없이
    return (
        <>
            <div>
                <h2>할 일 목록 📃</h2>
                <input onChange={changeSearch} value={search} placeholder="검색어를 입력하세요" />
                <ul>
                    {getSearchTodo().map((todo) => (
                        <TodoItem key={todo.id} {...todo}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoList