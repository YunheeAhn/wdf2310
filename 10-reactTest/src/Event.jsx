const Event = () => {

    // handleclick 이벤트 함수 등록
    const handleClick = (event) => {
    console.log('클릭')
    // alert('버튼이 클릭되었습니다')
    console.log(event) // 이벤트 객체 값이 출력
    console.log(event.target) // 이벤트가 발생한 DOM요소(<button></button>이 출력)
    console.log(event.type) //어떤 이벤트가 발생되는지 출력 (click)
    }

    // 마우스 오버 시 이벤트 함수 등록
    const handleMouseOver = (event) => {
        event.target.style.backgroundColor = 'lightgray'
    }

    // 값 입력 이벤트 함수 등록
    const handleChange = (event) => {
        document.querySelector('.text-value').innerText = event.target.value;
        // innerText : 엘리먼트 안의 Text값
    }

    return (
        <>
            {/* 버튼에 이벤트 등록하기
            버튼을 onclick 했을 때 handleclick함수 실행
            만약 handleClick() 으로 쓴다면 위에 등록 한 함수의 실행이 바로 실행 됨
            {/* {/* <h1>클릭이벤트</h1> */}
            {/* <button onClick={handleClick} >버튼</button>  */}

            <h1> 클릭 이벤트 </h1>
            <button onClick={handleClick} >버튼</button>

            <h1>마우스 오버 이벤트</h1>
            <div onMouseOver={handleMouseOver}>마우스 오버 시 발생</div>

            <h1>입력 이벤트</h1>
            <input onChange={handleChange} type="text" placeholder="placeholder"/>
            <div className="text-value"></div>

        </>
    )
};

export default Event;