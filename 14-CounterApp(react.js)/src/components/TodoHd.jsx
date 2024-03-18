import { css } from "@emotion/css"

const TodoHd = () => {
    return (
        <>
            <div className={css`
                text-align : center;
            `}>
                <h1>📝 할 일 관리 앱</h1>
                <p>오늘의 할 일을 적어보세요</p>
            </div>
        </>
    )
}

export default TodoHd