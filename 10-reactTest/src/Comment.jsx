import User from "./User"


// 코멘트 컴포넌트
const Comment = (props) => {
    // console.log(`props : ${props}`) // commentArr의 객체들
    // console.log(`props.data.date : ${props.data.date}`)

    const {user, text, date} = props.data
    return (
        <div className="comment">
            <User user = {user} />
            <p>{text}</p>
            <time>{date}</time>
        </div>
    )
}

export default Comment