// code
// 변수 : 데이터를 저장하고 사용 하는 데이터의 이름
// var(Es6이전에 사용 하던 변수, 현재는 잘 사용 안함), let, const

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


//---------------------------------------------------------------------------


//---------------------------------------------------------------------------









// [배열] {객체}

