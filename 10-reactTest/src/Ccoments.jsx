// 컴포넌트 분리 파일명 작성시 첫글자는 대문자

// import
import styled from 'styled-components';
import Comment from './Comment';


// 코멘트가 여러개 들어가는 컴포넌트
const Comments = () => {
    const usersArr = [
        {
            name : "윤희",
            img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=3715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: '윤희 프사'},
        {
            name: '희윤',
            img: 'https://images.unsplash.com/photo-1702541619085-a196485b9c09?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
             alt: '희윤 프사',
        },
        {
            name: '윤히',
            img: 'https://images.unsplash.com/photo-1705097569397-0aa271711bcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
             alt: '윤히 프사',
        },

        
    ]

    const commentsArr = [
        {
        user : usersArr[0],
        comment : "오늘은 금요일. 내일은 주말. 퇼이 아니길",
        date : "2024.01.26"},

        {
        user : usersArr[1],
        comment : "오늘은 토요일. 사진찍고 집에 가는중이에요",
        date : "2024.01.27"},

        {
        user : usersArr[2],
        comment : "오늘은 일요일. 맛있는거 먹고 집으로 가는길이에요.",
        date : "2024.01.28"}
    ]

    return (
        <>
        {commentsArr.map((item, index) => (
            <Comment key = {index} data = {item}/> //item : commentsArr 배열 안의 객체
        ))}
        
        </>
    )
}


export default Comments;