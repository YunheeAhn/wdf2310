import React, { useEffect, useState } from "react"
import Counter from "../components/Counter"
import Viewer from "../components/Viewer"


import { css } from '@emotion/css'

const Home = () => {

    const [count, setCount] = useState(0)

    const handleSetCount = (value) => {
    setCount(count + value)
    }
    
    const [txt,setTxt] = useState('')
    const changeTxt = (e) => {
        setTxt(e.target.value)
    }

    useEffect(() => {
        console.log('업데이트',count,txt)
    },[count,txt])

    return (
        <div className={css`
            display : flex;
            flex-direction : column; 
            align-items : center;  
            margin : 0 auto;
        ` }>
            <Viewer count={count}/>

            <input type="text" onChange={changeTxt} value={txt} className={css`
                margin-bottom : 20px;
                border : 3px dashed lightpink;

                width : 250px;
                height : 25px;

                border-radius : 12px;

            `}></input>

            <Counter handleSetCount={handleSetCount}/>
        </div>
    );
}

export default Home