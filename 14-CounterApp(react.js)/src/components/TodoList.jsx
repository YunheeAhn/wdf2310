import { useState } from "react"
import TodoItem from "./TodoItem"
import { css } from "@emotion/css"
import styled from "styled-components"

const TodoList = ({todo,onUpdate,onDelete}) => {
    // < [2] 검색어 입력 하기 관리>
    // 서치-1. 검색어 상태 변화 관리
    const [search,setSearch] = useState('')
    // 서치-2. input에 입력된 검색어로 상태 관리
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }
    // 서치-3. 검색어 포함하는 할일 목록 저장
    const getSearchTodo = () => {
        // 3-1. 검색어 포함된 목록 반환
        // 3-2. todo.task에 검색어 포함되어 있는지 확인
        // 3-3. 대소문자 구분X
        return todo.filter((todo) => todo.task.toLowerCase().includes(search.toLowerCase())) 
    }

    // 서치-4. 대소문자 구문 없이
    return (
        <>
            <div className={css`
                text-align : center;
            `}>
                <h2>할 일 목록 📃</h2>
                <TxtStyle onChange={changeSearch} value={search} placeholder="검색어를 입력하세요" />
                <ul className={css`
                padding : 0;`}>
                    {getSearchTodo().map((todo) => (
                        // 완료-3. onUpdate함수 컴포넌트에 전달(->todoitem.jsx)
                        // 삭제-3. onDelete함수 컴포넌트에 전달(->todoitem.jsx)
                        <TodoItem key={todo.id} onUpdate={onUpdate} onDelete={onDelete} {...todo}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoList

const TxtStyle = styled.input`
    border : 0px;
    border-bottom : 3px solid #ffaaaa;
    width : 200px;
    font-size : 16px;
    padding : 5px;
`
