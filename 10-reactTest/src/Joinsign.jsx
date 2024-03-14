import React, { useState } from "react"

// 최적화 React.memo
const JoinSign = React.memo(({user,setUser}) => {

    const changeName = (e) => {
        console.log("변경된 이름 : " + e.target.value)

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    const changeGender = (e) => {
        console.log('변경된 성별 : ' + e.target.value)
        setGender(e.target.value)
        console.log({gender})
    }
    const [gender,setGender] = useState('')

    return (
        <>
            <h1>이름, 성별, 나이, 자기소개</h1>
            <div>
                <form>
                    <label htmlFor="myName">이름</label>
                    <input onChange={changeName} type="text" id="myName" value={user.name}  placeholder="이름을 입력하세요" />
                </form>
            </div>
            <div>
                <form>
                    <label htmlFor="gender">성별</label>
                    <select id="gender" onChange={changeGender} value={user.gender}>
                        <option value="Man">남자</option>
                        <option value="Woman">여자</option>
                    </select>
                </form>
            </div>
            <div>
                <form>
                    <label htmlFor="age">나이</label>
                    <input type="number" id="age" placeholder="나이를 입력하세요" value={user.age} />

                </form>
            </div>
            <div>
                <form>
                    <label htmlFor="produce">자기소개</label>
                    <textarea id="produce"></textarea>
                </form>
            </div>
        </>
    )
})

export default JoinSign