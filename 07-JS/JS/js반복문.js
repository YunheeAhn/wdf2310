console.log('반복문')
// JS 반복문
// 반복문이란 특정 코드를 반복적으로 실행 할 때 사용

console.log('1-1. for문 (증가)')
// 1-1. for문 (증가)
// for (초기값; 조건; 증감식) {실행될 코드}
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('             ')
console.log('1-2. for문 (감소,break)')
// 1-2. for문 (감소,break)

for (let i = 9; i > -1; i--) {
    // 4보다 작은 수 일 경우 break
    if (i < 4){
        break; // 전체 반복문 종료
    }
    console.log(i);
}

console.log('             ')
console.log('1-3. for문 (continue)')
// 1-3. for문 (continue)
// 건너뛰기 = 현재 반복을 멈추고 다음 반복을 진행

console.log('짝수 건너뛰기')
for (let i = 10; i > 0; i--) {
    // 짝수를 건너뛰기
    if (i % 2 === 0) {
        continue; // 다음 반복으로 넘어감
    }
    console.log(i);
}

console.log('홀수 건너뛰기')
for (let i = 10; i > 0; i--) {
    // 홀수를 건너뛰기
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}


console.log('for문으로 배열 출력')
const animals = ['강아지','고양이','물고기'];
console.log(animals);
console.log(animals.length); // animals 배열의 길이

// for문을 배우기 전 배열 출력 방법
console.log(animals[0],animals[1],animals[2]);

// for문으로 배열 출력 하는 방법
console.log('for문으로 i값 지정해서 배열 출력 하는 방법')
for (let i=0; i < 3; i++) { 
    console.log(animals[i]);
}

console.log('for문으로 animals 배열의 길이 만큼 출력 하는 방법')
for (let i=0; i < animals.length; i++) { 
    console.log(animals[i]);
}

console.log('1-4. for of문')
// for (변수 of 배열) {실행 될 코드}
for (let animal of animals) {
    console.log(animal);
}

console.log('1-4. 예제')
const users = [
    {myName : '윤희', age : 29},
    {myName : '솔', age :28},
    {myName : '민경', age :28},
    {myName : '주연', age :29},
    {myName : '준영', age :26},
    {myName : '승민', age :26},
];
for (let i = 0; i < users.length; i++) {
    console.log(users) // users 배열이 출력
    console.log(users[i]) // users의 객체들이 출력
    console.log(users[i].myName) // users의 myName이 출력
    console.log(users[i].age) // users의 age가 출력
};
for (let user of users) {
    console.log(user); // 객체 출력
    console.log(user.myName); // myName만 출력
    console.log(user.age); // age만 출력
}