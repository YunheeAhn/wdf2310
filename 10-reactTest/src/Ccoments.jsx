// 컴포넌트 분리 파일명 작성시 첫글자는 대문자

// import
import styled from 'styled-components';

const Comments = () => {
    const usersArr = [
        {Name : "윤희", age : "28"},
        {Name : "희윤", age : "27"},
        {Name : "윤히", age : "26"}
    ]

    const commentArr = [
        {img : "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user : usersArr[0],
        comment : "오늘은 금요일. 내일은 주말. 퇼이 아니길",
        date : "2024.01.26"},

        {img : "https://images.unsplash.com/photo-1702541619085-a196485b9c09?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user : usersArr[1],
        comment : "오늘은 토요일. 사진찍고 집에 가는중이에요",
        date : "2024.01.27"},

        {img : "https://images.unsplash.com/photo-1705097569397-0aa271711bcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user : usersArr[2],
        comment : "오늘은 일요일. 맛있는거 먹고 집으로 가는길이에요.",
        date : "2024.01.28"}
    ]

    return (
        <>
        {commentArr.map((item, index) => (
            <Comments key = {index}/>
        ))}
        
        </>
    )
}


export default Comments;