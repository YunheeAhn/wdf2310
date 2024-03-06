// 배열
// 스타벅스 커피 배열
const starBucks = ['아메리카노','라떼','마끼아또']
// 콘솔창에 출력하기
console.log(starBucks[0]); //스타벅스의 1번째 값 출력하기
console.log(starBucks[2]); //스타벅스의 3번째 값 출력하기
console.log(starBucks.length); //스타벅스 값의 갯수 출력하기

// 객체
// 스타벅스 아메리카노 정보 객체
const starBucksMenu = {
    name : '아메리카노',
    price : 4000,
    size : 'tall'
}
// 콘솔창에 출력하기
console.log(starBucksMenu.name); //starBucksMenu의 name값 출력하기 (점표기법)
console.log(starBucksMenu.price); //starBucksMenu의 price값 출력하기 (점표기법)
console.log(starBucksMenu['size']); //starBucksMenu의 size값 출력하기 (대괄호표기법)

// parent 이용하기
const userA = {
    name : 'A',
    age : 60
}
const userB = {
    name : 'B',
    age : 20,
    parent : userA
}
console.log(userB) //userB 값 출력하기 -> 객체형식으로 출력됨 왜? 함수가 객체형식으로 이루어져 있음
console.log(userB.name); //userB의 name값 출력하기
console.log(userB.parent.name); //parent사용해서 userB의 부모의 name값 출력하기 (점표기법)
console.log(userB['parent']['name']) //parent사용해서 userB의 부모의 name값 출력하기 (대괄호 표기법)

//배열사용해서 users정보 확인하기
const users = [userA,userB]

const users2 = [
    {
        name : 'A',
        age : 60
    },
    {
        name : 'B',
        age : 20,
        parent : userA
    }
]
console.log(users2[0].name) // users2 배열의 1번째 객체의 name값 가져오기
console.log(users2[1]['parent']['age'])

// -----------------------------------------------------------------------------------------------------------------------

// 구조분해 할당
const arr = [1,2,3]

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[0],arr[1],arr[2]); // 배열의 여러값들을 동시에 출력하는 방법인데, 이건 좀;

// 그래서 구조분해 할당을 한당
const [a,b,c] = arr // const [a,b,c]라는 아이에 arr이라는 변수를 할당(=)해서 구조분해 하겠다는 뜻
console.log(a,b,c);
console.log(b,c);

// chakra-ui 반응형 작업 할 때
// display = {['none','none','block']}
// display = {[sm:'none',lg:'block']}


// 나머지 할당(구조분해할당)
const arr2 = [1,2,3,4,5,6];
const [d,e,...rest] = arr2;
console.log(d);
console.log(e);
console.log(rest);
console.log(...rest);


const obj = {
    name : 'kim',
    age : '28',
    height : 180,
    address : 'seoul'
}
console.log(obj.name);
console.log(obj.name, obj.age, obj.height, obj.address); // 너무 불편.. 구조분해할당을 하자

// const {name, age, height, address} = obj;
// console.log(name, age, height, address)

const {name = '이름 없음', age : Aaa, height = '키정보 없음', address} = obj;
console.log(name, Aaa, height, address)


// 선택적 체이닝 연산자

const user1 = {
    name : '안',
    age : 28,
    address : '서울'
}
const user2 = {
    name : '김',
    age : 28,
    address : ''
}

function printCity(user) {
    return user.address || "주소 정보가 없습니다.";

}

console.log(printCity); // 함수 자체가 콘솔창에 출력됨 ( function ~ } )
// console.log(printCity()); // 함수 { } 결과 값이 출력
console.log(printCity(user1));
console.log(printCity(user2));

// 조건문
function isPositive(props) {
    if (props > 0) {
        return '양수입니다'
    } else if (props < 0) {
        return '음수입니다'
    }else {
        return '0입니다'
    }
}
console.log(isPositive(1));
console.log(isPositive(-1));
console.log(isPositive(0));
console.log(isPositive(0.5));

// switch조건문
function getSound(props) {
    switch (props) {
        case '개' :
            return '멍멍'
        
        case '고양이' :
            return '야옹'

        case '소' :
            return '음머'

        default :
            return '뭔데!'
    }
}
console.log(getSound('개'))
console.log(getSound('고양이'))
console.log(getSound('소'))
console.log(getSound('나'))

// switch 조건문 if문으로 바꾸기
function getSoundif(props) {
    if(props === '개') {
        return '멍멍if'
    } else if(props === '고양이') {
        return '야옹if'
    } else if(props === '소') {
        return '음머if'
    } else {
        return '뭔데if'
    }
}
console.log(getSoundif('개'))
console.log(getSoundif('고양이'))
console.log(getSoundif('소'))
console.log(getSoundif('나'))

// 바뀐 if조건문 축약
function getSoundifS(props) {
    if(props === '개') return '멍멍축약'
    if(props === '고양이') return '야옹축약'
    if(props === '소') return '음머축약'

    return '뭔데축약'
}
console.log(getSoundifS('개'))
console.log(getSoundifS('고양이'))
console.log(getSoundifS('소'))
console.log(getSoundifS('나'))


// 반복문
console.log('for문 사용 전')
const foods = [
    {
        name : '돈까스',
        price : 12000 + '원'
    },
    {
        name : '연어초밥10pcs',
        price : 18000 + '원'
    },
    {
        name : '김치찌개',
        price : 5000 + '원'
    }
]
console.log(`${foods[0].name}의 가격은 ${foods[0].price} 입니다`)
console.log(`${foods[1].name}의 가격은 ${foods[1].price} 입니다`)
console.log(`${foods[2].name}의 가격은 ${foods[2].price} 입니다`)

console.log('for문 사용 후')
console.log('---기본 for문')

for (let i = 0; i < foods.length; i ++ ) {
    console.log(`${foods[i].name}의 가격은 ${foods[i].price} 입니다`)
}
console.log('---let of를 사용한 for문')
for (let food of foods) {
    console.log(`${food.name}의 가격은 ${food.price} 입니다`)
}


// 함수

// // 일반 함수는 가능
// // 일반함수는 호이스팅이 가능
// hello()
// // 익명함수는 호이스팅 불가능
// hello2()

function hello() {
    console.log('안녕하세요. 선언문 입니다.')
}
hello()

const hello2 = function () {
    console.log('안녕하세요. 익명함수 표현식입니다.')
}
hello2()

function sum(xx,yy) {
    return xx + yy
}
console.log(sum(3,5)) // 8 출력
console.log(sum(2)) // NaN 출력 <= (2 + undefined) , 기본값 설정하면 이슈 해결 ex(xx,yy = 1)

// 함수 선언
const userX = {
    name : 'Ahn',
    age : 25
}
function getName1 (props) {
    return props.name
}
console.log(getName1(userX))

// name은 age살 입니다로 만들어 보기
function getName2 (props) {
    return `${props.name}의 나이는 ${props.age}살 입니다`
}
console.log(getName2(userX))

// 함수의 매개변수 구조분해 할당하기
function getName3(props) {
    const {name, age} = props
    return `${name}의 나이는 ${age}살 입니다. 구조분해`
}
console.log(getName3(userX))

const userE = {
    name : 'Ahn',
    age : 25,
    email : ''
}
function getEmail(props) {
    const {name, age, email} = props
    return `${name}의 나이는 ${age}살 입니다. 이메일은 ${email}입니다.`
}
console.log(getEmail(userE))

// 배열의 구조분해 할당 알아보기
const table = ['row1','row2','row3']

function get2(props) {
    // arr3의 2번째 배열을 콘솔창에 출력하기
    return props // 배열 전체
    // 순서를 정해준다면?
    // return props[i]
}
console.log(get2(table)) // 배열이 출력됨
console.log(get2(table[0])) // table의 [0]번째 출력
console.log(get2(table[1])) // table의 [1]번째 출력
console.log(get2(table[2])) // table의 [2]번째 출력

// 배열 구조분해 할당 하기
function get22(props) {
    const [a,b,c] = props
    return `${a} ${b} ${c} + 구조분해 햇슈`
}
console.log(get22(table))


// 나머지 매개변수
function sum5(...rest) {
    return rest
}
console.log(sum5(1,2,3,4,5,6,7,8,9,10,11,12))


// 화살표 함수
const arrow = x => {} // 매개변수 1개일 경우 소괄호 생략 가능
const arrow2 = (x,y) => {} // 화살표 함수 기본 문법

const sum3 = () => {
    return 'sum3 화살표 함수'
}
console.log(sum3())

const sum33 = (a,b) => {
    return a + b
}
console.log(sum33(2,5))

const sum333 = (a,b) => a + b; // 화살표 함수 축약형
console.log(sum333(3,6))

// 화살표 함수의 다양한 예시

// 1. 매개변수가 없는 경우
const aa = () => {} ;
// 2. 매개변수가 하나인 경우
const bb = a => {};
// 3. 매개변수가 여러개인 경우
const cc = (a,b) => {}
// 4. 리턴이 있는 경우
const dd = (ab,af) => {
    return ab + af
}
// 5. 리턴이 있는 경우의 축약형
const ee = (ab,af) => ab + af;
// 6. 리턴으로 시작하지 않는 경우
    // 중괄호를 포함한 리턴을 생략 할 수 없다
const ff = (a,b) => {
    console.log(a,b)
}
// 7. 객체 데이터를 반환 하는 경우
const gg = () => {
    return {a:1, b:2}
}
// 8. 객체 데이터 반환하는 경우의 축약형
// 객체 데이터를 축약 하는 경우,
// 객체 데이터의 { }와 화살표 함수의 { }를 구분해야 함
// 그래서 ({객체데이터}) 소괄호로 객체 데이터를 감싼다
const hh = () => ({a : 1, b : 2}) 

// 9. 배열데이터를 반환하는 경우
const ii = () => {
    return [1,2,3]
}
// 10. 배열데이터의 축약형
const jj = () => [1,2,3]


