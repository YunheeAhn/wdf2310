
import { css } from '@emotion/css'

const Viewer = ({count}) => {
    return (
        <>
            <h1 className={css`
                color:white;
                font-size : 50px;

                padding : 18px 33px;
                background-color : pink;
                border-radius : 15px;

                width : auto;

                margin-top : 60px;
                margin-bottom : 60px;
                `
            }>{count}</h1>
        </>
    )
}

export default Viewer