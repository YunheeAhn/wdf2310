const TodoItem = ({id,isDone,task,createDate}) => {
    return (
        <>
            <div>
                <li key={id}>
                    <input type="checkbox" checked={isDone} />
                    <span>{task}</span>
                    <span>{new Date(createDate).toLocaleDateString()}</span>
                    <button>삭제</button>
                </li>
            </div>
        </>
    )
}

export default TodoItem