import { useReducer } from "react"
import TodoEditor from "../components/TodoEditor"
import TodoHd from "../components/TodoHd"
import TodoList from "../components/TodoList"
import { css } from "@emotion/css"

// 리스트 map
const mockTodo = [
    {
        id : 1,
        isDone : false,
        task : '할일1',
        createDate : new Date().getTime(),
    },
    {
        id : 2,
        isDone : false,
        task : '할일2',
        createDate : new Date().getTime(),
    },
    {
        id : 3,
        isDone : false,
        task : '할일3',
        createDate : new Date().getTime(),
    }
]
// < [5] useReducer로 상태 관리 하기 >
// useReducer : useState를 대체 하여 컴포넌트 상태 관리 하는 훅
// 상태 변경하는 로직을 컴포넌트 바깥에 선언, 재사용 용이, 코드 간결
 // useReducer-1. reducer함수로 상태 변경, state현재 상태, action상태 변경 참조 값
function reducer(state,action) {
    switch(action.type) {
        case 'ADD' :
            return [action.payload, ...state]
        case 'UPDATE' :
            return state.map((it) => (it.id === action.payload ? { ...it, isDone: !it.isDone } : it))
        case 'DELETE' :
            return state.filter((it) => it.id !== action.payload)
        default :
            return state
    }
} 

const Todo = () => {
    // useReducer-2.useReducer로 상태관리
    // const [,] = useReducer(reducer함수, 초기상태)
    // 반환값 : state(현재상태), dispatch함수(action발생 시키는 함수, 실행시 action발생->reducer함수 호출됨)
    // reducer함수 호출 -> state 변경 -> 컴포넌트 리렌더링
    const [todos, dispatch] = useReducer(reducer, mockTodo)

    
    // 할일 상태 변화 관리
    // const [todos,setTodos] = useState(mockTodo) 

    // <[1] todolist추가하기>
    // todo추가-1. id관리 변수 생성,이미 존재 하는 목록의 id중 가장 큰 값 + 1 => 초기화
    // const idRef = useRef(4)
    // todo추가-2. 할일 추가 하는 함수 생성
    const addTodo = (task) => {
        // // todo추가-3. 새로운 할 일 객체 생성
        // const newTodo = {
        //     id : idRef.current++,
        //     isDone : false,
        //     task,
        //     createDate : new Date().getTime(),
        // }
        // // todo추가-4. 기존에 있었던 내용에 추가하기
        // setTodos([newTodo,...todos]) ->reducer사용으로 인한 주석처리
        // useReducer-3. useReducer사용, 기존 함수 변경
        const newTodo = {
            id: Date.now(),
            isDone: false,
            task,
            createDate: new Date().getTime(),
        }
        dispatch({ type: 'ADD', payload: newTodo })
    }

    // < [3] 할일 관리 앱 완료 표시하기>
    // 완료-1. 완료 표시 클릭시 호출되는 함수 생성, id에 해당되는 isDone 변경
    const onUpdate = (id) => {
        // setTodos (
        //     // 완료-2. map이용하여 todos배열 순회 및 id에 해당하는 할일의 isDone변경
        //     // todos.map((it) => it.id === id ? {...it, isDone : !it.isDone} : it )
            
        //     )
            // useReducer-3. useReducer사용, 기존 함수 변경
            dispatch({ type: 'UPDATE', payload: id })
    }

    // < [4] 할일 관리 앱 완료 항목 버튼 눌러서 삭제하기 >
    // 삭제-1. 삭제 버튼 클릭시 호출되는 함수 생성
    const onDelete = (id) => [
        // 삭제-2. 해당 id요소를 제외한 나머지 요소들만 반환
        // setTodos(todos.filter((it) => it.id !== id))

        // useReducer-3. useReducer사용, 기존 함수 변경
        dispatch({type : 'DELETE', payload : id})
    ]
    
    

    return (
        <div className={css`
            margin : 0 auto;
            margin-bottom : 30px;
            margin-top : 50px;
            display : flex;
            flex-direction : column;
            align-items: center;
            border : 3px solid pink ;
            width : 500px;
        `}>
            <TodoHd/>
            <TodoEditor addTodo={addTodo}/>
            {/* todo추가-5. 목록을 리스트에 보내기 */}
            <TodoList onUpdate={onUpdate} onDelete={onDelete} todo={todos}/>
        </div>
    )
}

export default Todo;