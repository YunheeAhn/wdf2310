// JS의 조건문

console.log('JS의 조건문')
console.log('1. if 조건문')
// if 조건문
// if (조건) {
    // 조건이 true일 때 실행되는 코드 넣기};

console.log('2. if-else 조건문')
// if-else 조건문
// if (조건) {
    // 조건이 true일 때 실 행되는 코드 넣기
// } else {
    // 조건이 false일 때 실행되는 코드 넣기};

console.log('3. if-else-if 조건문')
// if-else-if 조건문
// if (조건) {
    // 조건이 true일 때 실 행되는 코드 넣기} 
    // else if (조건) {
        // 조건이 true일 때 실행되는 코드}
        // else {조건이 false일 때 실행되는 코드 넣기};

        console.log('    ')
        console.log('예제로 학인하기')

// 음수, 양수 판별 함수
// 함수선언
function isPositive (num) {
    if (num > 0 ) {
        console.log('양수 입니다.')
        console.log(`${num}은/는 양수 입니다.`)
        console.log(num + '은/는 양수 입니다.')
    } else if (num < 0) {
        console.log('음수 입니다.')
        console.log(`${num}은/는 음수 입니다.`)
        console.log(num + '은/는 음수 입니다.')
    } else {
        console.log('0 입니다.')
        console.log(`${num}은/는 0 입니다.`)
        console.log(num + '은/는 0 입니다.')
    }
}

// 함수 실행
isPositive(0);
isPositive(-9);
isPositive(4);

console.log('1-4. 스위치 조건문')
// 1-4. 스위치 조건문
// 매개변수로 입력된 값과 일치하는 case문을 실행한다.

// switch (매개변수) {
    // case 값1:
    // 매개변수 === 값1일 때 실행되는 코드
    // break;
    // case 값2:
    // 매개변수 === 값2일 때 실행되는 코드
    // break;
    // case 값3:
    // 매개변수 === 값3일 때 실행되는 코드
    // break;}

function getPrice(item) {
    let price;
    switch (item) {
        case "패딩" :
            price = '280,000'
            break;
            
        case "바지" :
            price = '129,000'
            break;
        
        case "상의" :
            price = '89,000'
            break;

        default :
            price = '아이템 별로 상이함'
    }
    return price;
}
console.log(getPrice("패딩"))
console.log(getPrice("바지"))
console.log(getPrice("상의"))
console.log(getPrice("모자"))



function getPrice2(item2) {
    let price
    switch (item2) {
        case "패딩" :
            return '380,000d원';
            // return으로 함수를 종료하고 값을 반환
            // return을 사용하면 break를 사용하지 않아도 됨
        case "바지" :
            return '99,000d원';
        case "상의" :
            return '36,000d원';
        
        default :
            return '아이템별로 가격 상이 함';
    }
}
console.log(getPrice2("패딩"))
console.log(getPrice2("바지"))
console.log(getPrice2("상의"))
console.log(getPrice2("모자"))

console.log('switch조건문을 if조건문으로 바꾸기')
// switch 조건문 if조건문으로 바꾸기

function getPrice3(item3) {
    if (item3 === "패딩")
    return "270,000";

    if (item3 === "바지")
    return "96,000";

    if (item3 === "상의")
    return "28,000";

    return '아이템 별로 상이함';
}

console.log(getPrice3('패딩'));
console.log(getPrice3('상의'));
console.log(getPrice3('바지'));
console.log(getPrice3('모자'));