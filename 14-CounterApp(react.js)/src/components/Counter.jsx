import { css } from '@emotion/css'
import styled from 'styled-components'

const Counter = ({handleSetCount}) => {
    return (
        <>
            <div className={css`
                display: flex;
                gap : 10px;
            `}>
                <CountBtnStyle onClick={() => handleSetCount(-1)}>-1</CountBtnStyle>
                <CountBtnStyle onClick={() => handleSetCount(-10)}>-10</CountBtnStyle>
                <CountBtnStyle onClick={() => handleSetCount(10)}>10</CountBtnStyle>
                <CountBtnStyle onClick={() => handleSetCount(1)}>1</CountBtnStyle>
            </div>
        </>
    )
}

export default Counter


const CountBtnStyle = styled.button`
    width: 60px;
    padding: 3px 10px;
    border : none;
    border-radius : 20px;

    font-size : 20px;

    background : #ffaaaa;
    color : white;

`
