import { List, ListItem } from "@chakra-ui/react";
import React,{ useEffect, useState } from "react";

const Userslist = ( ) => {
    // useState() : 컴포넌트의 상태 관리 함수
    // const [상태변수, 상태변수 변경할 함수] = useState(초기값)
    const [users,setUsers] = useState([])

    // api를 안 받아왔을 때 기본 형태
    // const users = [
    //     {id : 1, name : 'Kim'},
    //     {id : 2, name : 'Lee'},
    //     {id : 3, name : 'kim'}
    // ]

    // useEffect(함수, [의존성 배열]) : 컴포넌트가 처음 랜더링 될 때 실행
    useEffect(()=>{
        // fetch() : api 요청 함수
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            return response.json() //json을 js객체로 변경해줘
        })
        .then((data)=>{
            // api를 js객체로 잘 변경되어서 들어왔을 경우
            setUsers(data)
        })
        .catch((error)=>{
            // api를 js객체로 잘 변경되어서 안 들어왔을 경우
            console.log(error)
        })
    },[])

    return (
        <>
            <h2>Users</h2>
            {/* users 상태변수에 데이터가 저장되면, ul 태그를 출력 */}
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : (
                // users 상태변수에 데이터가 저장되지 않았다면, 로딩 중... 출력
                <p>로딩 중...</p>
            )}
        </>
    )

    // return (
    //     <>
    //         <h1>Users List</h1>
    //         <List>
    //             {users.map((user,index) => (
    //                 <ListItem key={user.id}>{user.name}</ListItem>
    //             ))}
    //         </List>
    //     </>
    // )
}

export default Userslist;