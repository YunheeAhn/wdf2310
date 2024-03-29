// 함수의 기본
console.log('함수의 기본')

console.log('')
console.log('1. 함수 선언하기')
console.log('1-1. 함수 선언 하는 방법')

console.log('① 함수 선언식 : function 함수이름()')
// function 함수이름()

console.log('--예제')
console.log('  function hello() {')
console.log("      console.log('hihi')")
console.log('  }')

function hello() {
    console.log('hihi')
}

console.log('② 함수 표현식 : const 함수이름 = function (){}')

console.log('--예제')
console.log('  const world = function() {')
console.log("          console.log('world')")
console.log('  }')


const world = function() {
    console.log('world')
}

console.log('③ 함수 호출 : hello() / hellob()')

console.log('--예제')

console.log('  hello();')
hello();

console.log('  world();')
world();


console.log('')
console.log('2. 함수 호이스팅')


console.log('');
console.log('3. 반환 및 종료');
console.log('3-1. return');
// return
// return : 함수를 종료하고 그 값을 반환하는 것
function heello() {
    return 'hello';
    console.log('world'); // return문 뒤에 작성된 코드는 실행되지 않음
    return 'hello22' //return 은 하나만 사용
}
heello();

function h2(){
    return; // undefined
    return 'hello22' //return 은 하나만 사용
}
h2();


console.log('')
console.log('4. 매개변수')
console.log('4. function 함수이름(매개변수1,매개변수2){}')

// 매개변수
// 매개변수란 함수를 호출할 때 함수로 전달되는 값
// function 함수이름(매개변수1,매개변수2) {}

console.log('--예제')
function sum(x,y) {
    return x + y;
}
console.log(sum(13,2)); // 15
console.log(sum(7,3)) // 10
console.log(sum(5)) // Nan = 5 + undefined

// Nan출력 안되게 하는 방법
function sum2(e,f=2) {
    // 매개변수에 기본값 설정
    return e + f;
}
console.log(sum2(3)) // 5

console.log('')
console.log('4-1. 객체의 구조분해 할당')
// 객체 구조분해 할당
console.log('① 일반적인 사용 방법')
// user 객체 : name, age, email
const user = {
    myName : '윤희',
    age : 29,
    email : 'ayh95944674@gmail.com'
}

function neweEmail(bbb) {
    return bbb.myName + bbb.email;
}
console.log(neweEmail(user));

function newEmail(aaa) {
    return `${aaa.myName}의 이메일 주소는 ${aaa.email}입니다`;
}
console.log(newEmail(user));

const users = [
    {
        myName : '윤희',
        age : 29,
        email : 'ayh95944674@gmail.com',
    },
    {
        myName : '솔',
        age : 28,
        email : 'sol96@gmail.com',
    },
    {
        myName : '민경',
        age : 28,
        email : 'min96960126@gmail.com',
    }
];
function getEmail(eefa) {

    return `${eefa.myName}의 나이는 ${eefa.age}입니다`;
}
console.log(getEmail(users[0]));
console.log(getEmail(users[1]));
console.log(getEmail(users[2]));

function getEmail2(eefa) {
    const {myName,age} = eefa;
    return `${myName}의 나이는 ${age}입니다`;
}
console.log(getEmail2(users[0]));
console.log(getEmail2(users[1]));
console.log(getEmail2(users[2]));


console.log('')
console.log('4-2. 배열의 구조분해 할당')

const animals = ['강아지','고양이','물고기'];

function getS(array) {
    return array[1];
}
console.log(getS(animals));

// 강아지고양이물고기를 키우고 있어
function getS2(array2) {
    return `${array2[0]},${array2[1]},${array2[2]}를 키우고 있어`
}
console.log(getS2(animals))


// 구조분해 할당 해서 해보기

function getS3(array3) {
    const [getA, getB, getC] = array3

    return `난 ${getA},${getB},${getC}를 좋아해`
}
console.log(getS3(animals))

// 하나를 빼보기
function getS4([,b,c]) { // 고양이랑 물고기만 나오게 하려면 ,를 넣어서 앞에 비어있다는 것을 표현
    return `난 ${b}와 ${c}를 키우고 있어`
}

console.log(getS4(animals)) //고양이와 물고기

const getA = animals[0]
const getB = animals[1]
const getC = animals[2]

console.log(getA,getB,getC)

function getS6([b = '두번째 요소가 없습니다.'] ) {
    return `난 ${b}를 키우고 잇어`
}
console.log(getS6(animals))

function getS6([,b = '두번째 요소가 없습니다.'] ) {
    return `난 ${b}를 키우고 잇어`
}
console.log(getS6(animals))

console.log('')
console.log('4-3. 나머지 매개변수')
// 나머지 매개변수 (...rest)
// 매개변수를 배열로 전달 받는다.

// function 함수이름(...매개변수) {}

function print(...rest) {
    console.log(rest) // 콘솔로그로 호출
}
print(1,2) // 콘솔창에서 print 호출 [1,2]
print(1,2,3,4,5,6,7,8) // 콘솔창에서 print 호출 [1,2,3,4,5,6,7,8]

function print2(a,...rest2) {
    console.log(a,rest2) // 콘솔로그로 호출
}
print2(1,2) // 1 [2]
print2(1,2,3,4,5,6,7,8) // 1 [2,3,4,5,6,7,8]

// 배열 데이터에 숫자를 더하는 로직 함수
function print3All(...rest) {
    console.log(rest)

    // return rest.reduce(fn, 초기값);
    return rest.reduce(function (acCount, curRent) {
        return acCount + curRent // 누적된 값에, 현재 값을 계속 더함
    }, 0);
}
console.log(print3All(1,2,3)) // 6
console.log(print3All(1,2,3,4,5,6,7)) // 28

print3All(1,2) // [1,2]
print3All(1,2,3,4,5,6,7,8) // [1,2,3,4,5,6,7,8]

// 화살표 함수
// const fn = function() {}; 함수의 표현식
// const 함수이름 = (매개변수) => {실행문}; 매개변수가 없을 경우 화살표 함수
// () => {}; 매개변수가 없을 경우
// ('생략') => {} ; 매개변수가 하나일 경우 소괄호 생략 가능
// (x,y) => {} ; 매개 변수가 여러개인 경우, 소괄호 생략 할 수 없다.


const hello3 = (naName) => {
    console.log(`나는 ${naName}입니다.`)
}
hello3('안윤희'); // 나는 안윤희입니다.

// sum함수에 적용해보기
const print5 = (a,b) => {
    return a + b;
}
console.log(print5(1,2)) // 3

// 화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const Aa = () => {} ;

// 2. 매개변수가 하나만 있는 경우
// 매개변수 감싸는()괄호 생략 가능
const Bb = x => {}; 

// 3. 매개변수가 여러개인 경우
// 매개변수 감싸는()괄호 생략 불가
const Cc = (Xx,Yy) => {};

// 4. 함수에 리턴이 있는 경우
// {}중괄호 포함 리턴 생략 가능
// 4-1. return으로 시작하는 경우
const Dd = (Xxx,Yyy) => Xxx + Yyy
 // const Dd = (Xxx,Yyy) => {return Xxx + Yyy};

// 4-2. return으로 시작하지 않는 경우
const Ee = (Xxxx,Yyyy) => {
    console.log(Ee);
    return Yyyy;
}

// 5. 객체를 반환 하는 경우 
// {}중괄호 포함 리턴 생략 가능
// 단, 객체를 ()소괄호로 감싸준다
const Ff = () => ({Xa : 1});
// const Ff = (Xa) => {return { Xa : 1}};

// 6. 배열을 반환 하는 경우
// {}중괄호 포함 리턴 생략 가능
const Gg = () => [1,2,3]
// const Gg = () => {return [1,2,3]};



// 호출 스케쥴링
// setTimeout(함수, 시간)
// 일정 시간이 지난 후에 함수를 실행 하는 함수
const setTimer = setTimeout(() => {
    console.log('곧 폭탄이 터집니다') 
},100000000000)


const stopBtn = document.querySelector('.btn-stop')
const startBtn = document.querySelector('.btn-start')

stopBtn.addEventListener('click', () => {
    console.log('stop')
    clearTimeout(setTimer)
})
startBtn.addEventListener('click', () => {
    console.log('start')
})


// setInterval(함수, 시간)
// 일정 시간 간격으로 함수를 실행
const setTimer2 = setInterval(() => {
    console.log('안녕 난 나야!')
},100000000000) 

const stopSlide = document.querySelector('.slide-stop')
stopSlide.addEventListener('click',() => {
    console.log('슬라이드 정지')
    clearInterval(setTimer2)
})


// 콜백 함수
// 함수의 매개변수로 전달되는 함수를 콜백 함수라고 한다.
const aA = (props) => {
    props() // 함수 실행
    console.log('A를 실행 했어요')
}
const bB = () => {
    console.log('B를 실행 했어요')
}
aA(bB)
// bB()

// 예제를 통해 콜백 함수 알아보기
const sumCallBack = (a,b) => {
    setTimeout(() => {
        return a + b
    }, 1000)
}
console.log(sumCallBack(2,4)) // undefined
console.log(sumCallBack(9594,4674)) //undefined
// seetTimeout을 1초 뒤에 추가 하는걸로 했는데
// sumCallBack 함수가 실행 되기 전에 반환 되므로 값이 undefined가 된다

// 변경된 부분
const sumCallBack2 = (a,b,c) => {
    setTimeout(() => { //setTimeout 함수를 c라는 매개변수의 인수로 넣는다
        return c(a + b) //c는 a+b의 값으로 나오게 return : 합을 알고 싶으니까
    }, 0)
}
sumCallBack2(1,2,(value) => { // 위에서 인수로 정한C를 화살표 함수로 콜백
    console.log(value)
})

// -------------------콜백함수 다시 연습해보기--------------------------------------------
const bbB = () => {
    console.log('b call')
}
// aaA()

const aaA = (props) => {  //값을 props로 받아오고
    props()                 // props() 값을 실행 하고
    console.log('a call')
}
aaA(bbB) // bbB() 함수에 aaA를 인수로 넣는다. 인수로서의 역할이기 때문에 소괄호는 삭제

const sum6 = (a,b,c) => {
    setTimeout(() => {
        return c(a + b)
    },2000)
}
sum6(1,5,(value) => {
    console.log(value)
})
// --------------------------------------------------------------------------------------

// 재귀함수
// 스스로가 스스로를 호출하는 함수

// 간단 예제
let i = 0

const recursion = () => {
    console.log('재귀함수실행')
    i++
    if(i<5) {
        recursion()
    }
    // recursion() => 무한 호출됨
}
recursion()

// 심화 예제
const user01 = {
    name : '01',
    parent : null
}
const user02 = {
    name : '02',
    parent : user01
}
const user03 = {
    name : '03',
    parent : user02
}
const user04 = {
    name : '04',
    parent : user03
}

const getRootUser = (props) => {
    if(props.parent) {
        return getRootUser(props.parent)
    } else {
        return props.parent
    }
}
console.log(getRootUser(user04))

// this 함수
// 일반 함수는 호출 위치에 따라 this가 정해진다.
// 화살표 함수는 자신이 선언된 함수 범위에서 this가 정해진다. === 화살표 함수 쓰지 말자
const objThis = {
    name : '아메리카노',
    price : 4500,
    // front : function () {}
    front() {
        return `${this.name}의 가격은 ${this.price}원 입니다`
    }
}
console.log(objThis.front())

function coffee2() {
    this.name = '프라푸치노'
    this.price = 6500

    return {
        name : '라떼',
        price : 5000,
        front : () => { 
            return `${this.name}의 가격은 ${this.price}원 입니다`
        }
    }
}
const coffee3 = coffee2()

// const objThis2 = {
//     name : '라떼',
//     price : 5000,
//     front : () => { // 화살표 함수가 되면 값들을 찾지 못함
//         return `${this.name}의 가격은 ${this.price}원 입니다`
//     }
// }
// console.log(objThis2.front())