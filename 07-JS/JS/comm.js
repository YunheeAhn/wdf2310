// code
// 변수 : 데이터를 저장하고 사용 하는 데이터의 이름
// var(Es6이전에 사용 하던 변수, 현재는 잘 사용 안함), let, const
// var는 중복 사용이 가능 해서 오류날 가능성이 높음

// 변수 선언
let a = 10
const b = 5
// let은 값 재할당 가능, const는 값 재할당 불가능
// 모달창은 값을 재할당 받으면 안되니까, const를 사용

console.log(a);
console.log(b);
console.log(a+b);
console.log(a*b);
console.log(a/b);

// let 변수 : 변수 값 변경 가능
let c = 10;
console.log(c);

// let 변수 값 재 할당 방법
c = 20; //바로 변수=값 으로 쓰면 됨
console.log(c);


// const변수 : 변수 값 변경 불가능
// 재할당 하면 안되는 경우에 사용
const d = 27;
console.log(d);

// d = 30;
// console.log(d); 
// 재할당이 안되기 때문에 콘솔창에 오류가 뜸!

//----------------------------------------------------------------------

// Zero base 넘버링
// js는 배열의 index(순서)가 0부터 시작
let name = ['박주연','이민경','임솔'];
// 배열 데이터
console.log(name) //박주연, 이민경, 임솔

// 순서가 중요하기때문에 넘버링
console.log(name[0]) //박주연
console.log(name[1]) //이민경
console.log(name[2]) //임솔

//------------------------------------------------------------------------

// 문자열 데이터 - String
// 문자열은 작은 따옴표('')또는 큰 따옴포(")로 감싸서 표현

let mName = '안윤희';
//name은 예약어로 특별한 의미를 지니고 있어서, 변수나 함수 이름 등으로 사용 불가
let age = '28';
console.log(mName);
console.log(age);
console.log(mName,age);
console.log(mName+age);
console.log(`${mName} 나이는 ${age}살 입니다`);


let myName = "yunhee" 
let email = 'yunhee@naver.com'
let hello = `Hello ${myName}${email}!!`

//---------------------------------------------------------------------------

// 불린 데이터 - Boolean
// true, false 두 값이 있는 논리 데이터
let hungry = true;
let cool = false;
console.log(hungry); //true
console.log(cool); //false

//---------------------------------------------------------------------------

// 객체 데이터 - object
// 여러 데이터르 ㄹ하나의 변수에 저장하기 위해 사용
// {key:value}; 사용
let user = {
    // key, value
    name : '안구름',
    age : '1',
    cute : true
}

console.log (user);
console.log (user.name);
console.log (user.age);
console.log (user.cute);
console.log (`${user.name}은 ${user.cute ? '귀여워요':'귀엽지 않아요'}`)
//---------------------------------------------------------------------------

// 배열 데이터 - Array
// 여러 데이터를 순서대로 저장하기 위해 사용
let fruits = ['banana', 'apple', 'cherry','strawberry']

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// [배열] {객체}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

// 함수 - Function
// 특정 기능을 수행하는 코드의 집합

// 함수선언
function sayHello() {
    // 실행할 내용 입력
    console.log('안녕하세요!')
}
// 함수호출
sayHello(); //함수명() -> 함수 호출됨

// 함수 재사용 방법
// 우선 함수 선언
function sum(a,b) {
    // 재사용 할 a와b의 길을 만들어준 후
    // 리턴으로 값을 밖으로 빼준다
    return a + b ;
}
// 함수호출
// sum(30,95); //선언한 함수에 a와b값 입력
console.log(sum(30,95));
console.log(sum(70,80));
// 이렇게 할 때마다 써주는게 힘드니까, 선언한 함수를 변수로 지정
let e = sum(20,30);
console.log(e);


// 기명 함수
function hello1() {
    console.log('hello1 기명함수');
}
hello1();

// 익명 함수
let hello2 = function () {
    console.log('hello2 익명함수');
}
hello2();

// 화살표 함수 (익명 함수랑 비슷)
// es6 최신 자바스크립트 버전에서 업데이트 됨
// 이유 : 함수 안에 함수를 또 선언하니, 너무 길어져서 생김
let hello3 = () => {
    console.log('hello3 화살표함수');
}
hello3();

// 객체 데이터 안 함수 들어가는 것을 method메소드 라고 함


// -----------------------------------------------------------------
// -----------------------------------------------------------------

// 조건문 if, else
// 특정 조건에 따라 다른 코드를 실행 할 때 사용

// if (조건입력) {참일경우 실행문 입력} else {거짓일 경우 실행문 입력}
// 만약 조건이 참이라면 이렇게 하고 거짓이라면 이렇게 해라

if (false) {
    // 참일경우 실행문
    console.log('true')
} else {
    // 거짓일 경우 실행문
    console.log('false')
}


// DOM API : Document Object Model
// html문서의 요소를 제어하는 방법

// Html  요소(element) 검색

const boxEl = document.querySelector('.box');
console.log(boxEl);

// boxEl를 클릭 했을 때, 할 일을 함수로 정의
boxEl.addEventListener ('click', function() {
    console.log('click');
    // boxEl 요소에 active클래스 추가
    boxEl.classList.add('active')
});

// 요소 모두 찾기

const tabEls = document.querySelectorAll('.tab');
console.log(tabEls);

tabEls.forEach(function(tabEl, index) {
    console.log(tabEl,index);
    tabEl.classList.add(`tab${index + 1}`);
})