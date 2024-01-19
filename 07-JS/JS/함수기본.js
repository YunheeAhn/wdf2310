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

