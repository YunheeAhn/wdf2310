// 완료-4. onUpdate함수 전달

import { css } from "@emotion/css"
import styled from "styled-components"

// 삭제-4. onDelete함수 전달
const TodoItem = ({id,isDone,task,createDate,onUpdate,onDelete}) => {
    return (
        <>
            <div className={css`
                text-align : center;
                margin-bottom : 15px;
            `}>

                <li key={id}>
                    {/* 완료-5. 체크 박스 클릭시 onUpdate함수 호출 */}
                    <input type="checkbox" onChange={() => onUpdate(id)} checked={isDone} />
                    {/* 완료-6. 취소선 표시, 할일은 흐리게 표시 */}
                    <span style={{textDecoration : isDone ? 'line-through' : 'none'}}>{task} </span>
                    <span>{new Date(createDate).toLocaleDateString()}</span>
                    {/* 삭제-5. 삭제 버튼 클릭시 onDelete함수 호출, 해당 인수로 아이템 id값 전달 */}
                    <CountBtnStyle onClick={() => onDelete(id)}>삭제</CountBtnStyle>
                </li>

            </div>
        </>
    )
}

export default TodoItem

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