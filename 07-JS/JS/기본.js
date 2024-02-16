// JS 기본


// 문자 데이터
console.log('문자(String표시')
console.log('hello world')

const a = 'cloud'
console.log(a)

console.log('안녕강아지')

  // 리터럴방식
console.log(`안녕우리집멍멍이!! ${a}`) // 백틱(``)이용시 문자데이터 안에 변수를 넣을 수 있다


// 숫자 데이터
console.log(123) // 123
console.log(1+2) // 3
console.log("1" + 2) // 12 (여기서 1은 문자로 인식)
console.log("12" + "2345") // 12 여기서 12와 2345를 각각의 문자로 인식

  // 음수
const b = -123
console.log(b) // -123
  // 소수점
const c = 1.23;
console.log(c,b) // 1.23 -123
console.log(c,b + 100) // 1.23 -23
console.log(c * 2, b+100) // 2.46 -23

// 숫자로 변환하기
const d = 0.1;
const e = 0.2;
console.log(d + e); // 0.30000000000004 부동소수점 방식으로 출력
console.log((d + e).toFixed(1)) // 0.3 / toFixed()는 소수점 자리수를 지정해주는 메소드, 단 문자열로 출력
console.log(typeof (d + e).toFixed(1)) // string / typeof메소드로 반환 데이터 상태 확인
console.log(Number((d + e).toFixed(1))) // 0.3 / 문자열로 출력되는 것을 방지 하기 위해 Number메소드를 입력하면 숫자로 출력
console.log(typeof(Number((d + e).toFixed(1)))) // number / typeof메소드로 반환 데이터 상태 확인

// boolean 불린 (참, 거짓)

const f = true;
const g = false;

if (f) {
    console.log('참입니다')    
}

// null & undefined
// null : 값이 없다
// undefined : 값이 할당되지 않았다.

let age = null;
console.log(age) // null / 아예 null이라고 값이 없다고 지정해버림
age = 20 //let선언했기때문에 값 재 할당 가능
console.log(age) // 20 

let height;
console.log(height) //undefined /값을 그냥 아무것도 선언하지 않아서 할당되지 않음
height = 200  // 마찬가지로 let선언 했기 때문에 값 재 할당 가능
console.log(height) // 200 


// 배열(Array)
// 여러개의 값을 순차적으로 나열한 자료형 
// 순서가 있음 [0,1,2]
const animals = ["강아지","고양이","햄스터"]
console.log(animals) // (3) ["강아지","고양이","햄스터"]
console.log(animals[0]) // 강아지 / 0번째 값 출력
console.log(animals[1]) // 고양이 / 1번째 값 출력
console.log(animals[2]) // 햄스터 / 2번째 값 출력
console.log(animals.length) // 3 / 배열의 길이를 출력
console.log(animals[animals.length]) // undefined / animals의 길이 만큼의 값을 출력 하라는데 3의 값은 없기 때문에 undefined
console.log(animals[animals.length - 1]) // 햄스터 / 배열의 가장 마지막 값을 출력


// 객체(Object)
// properties(속성)들의 순서가 없는 집합
// {key:value,key:value,---} 여러개의 값을 저장한 자료형
const user = {
  name:'cloud',
  age:10
};
console.log(user)
  // user의 네임 값만 쓰려면?
console.log(user.name) // cloud
console.log(user.age) // 10

  // 점 표기법
    // 구름이의 나이는 N살 입니다
console.log(`${user.name} 의 나이는 ${user.age} 입니다!`);

  // 대괄호 표기법
console.log(user['name'],user['age']);


  // ex
  const userA = {
    name:'Yunhee',
    age:29,
    species:'human'
  }
  const userB = {
    name:'cloud',
    age:10,
    species:'dog',
    parent:userA
  }
  console.log(userB); // {name:'cloud'---}
  
  // userB를 통해서 userA의 네임값을 알려면?
  console.log(userB.parent.name)
  console.log(userB['parent']['name'])


  // 배열에 객제 넣기
  const users = [userA,userB];
  console.log(users) // {usersA~,usersB}
  console.log(users[0]) //user의 0번째 값들
  console.log(users[0].name) //userA의 0번째값 


//////// 함수 ////////
// 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 자료형 데이터
//  function(NAME){}
function printHello() {
  console.log('Hello')
}
printHello(); // Helloe, 함수 출력 하기

  function getNumber() {
    return 123; //123으로 반환
  }
  // 데이터 타입
  console.log(getNumber) // getNumber() { return 123}
  console.log(getNumber,typeof getNumber) //function
  console.log(getNumber(),typeof getNumber) //string

  // type Conversions(형 변환) : 값만 비교
  const h = 1;
  const i = '1'
    // 동등 연산자
    console.log(h == i) // true
    // 일치 현장가
    console.log(h === i) //false


    // truthy(참 같은 값) & falsy(거짓 같은 값)
    // falsy : false, 0, '', null, undefined, NaN
    
    const Ja = false;
    if (Ja) {
      console.log('참입니다!')
    } // false일 경우는 거짓이기 때문에 '참입니다!'가 출력이 되지 않음
    else {
      console.log('거짓입니다!')
    } // 값이 false이기 때문에 '거짓입니다!'가 출력 됨
      // false,0,'',null,undefined,NaN 도 마찬가지로 '거짓입니다!가 출력 됨