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
