import React, { useEffect, useState } from "react"
import Counter from "../components/Counter"
import Viewer from "../components/Viewer"


import { css } from '@emotion/css'

const Home = () => {

    const [count, setCount] = useState(0)
    const handleSetCount = (value) => {
    setCount(count + value)
    }

    return (
        <div className={css`
            display : flex;
            flex-direction : column; 
            align-items : center;  
            margin : 0 auto;
        ` }>
            <Viewer count={count}/>
            <Counter handleSetCount={handleSetCount}/>
        </div>
    );
}

export default Home