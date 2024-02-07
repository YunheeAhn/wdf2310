import { useState } from "react"

const SetNumber = () => {

    const [number, SetNumber] = useState(0)

    const increase = () => {
        SetNumber(number + 1)
    }

    const decrease = () => {
        SetNumber(number - 1)
    }

    return (
        <>
        <h1>{number}</h1>
        <button onClick={increase}> + </button>
        <button onClick={decrease}> - </button>

        {/* 이렇게도 사용 가능해요 */}
        {/* <button onClick={() => {SetNumber(number + 1)}}>++</button> */}
        {/* <button onClick={() => {SetNumber(number - 1)}}>--</button> */}
        </>
    )
}

export default SetNumber