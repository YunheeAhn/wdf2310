// JS의 구문

// 1. 구조분해 할당
console.log('1. 구조분해 할당')

// 객체나 배열을 변수로 '분해'
// 객체나 배열의 속성을 해체하여 그 값을 개별 변수에 담게 하는 표현식

// 1-1. 배열의 구조분해
console.log('1-1. 배열의 구조분해')

  // 구조분해 하지 않은 경우
  console.log('구조분해 하지 않은 경우')

  const arr1 = [1,2,3];

  const a = arr1[0];
  const b = arr1[1];
  const c = arr1[2];

  console.log(a,b,c);

  // 구조분해 할당을 한 경우(변수 미리 할당X)
  console.log('구조분해 할당을 한 경우(변수 미리 할당X)')

  const arr2 = [1,2,3];
  const [a2,b2,c2] = arr2;

  console.log(a2,b2,c2);

  // 각가의 변수가 미리 할당되어 있을 경우
  console.log('각가의 변수가 미리 할당되어 있을 경우')

  let a3 = 0;
  let b3 = 0;
  let c3 = 0;

  const arr3 = [1,2,3]; // !명령이 끝났다는 ;세미콜론을 붙여줘야 하나로 인식 안함!
  [a3,b3,c3] = arr3; // 구조분해 할당(재할당이므로 const 제거)

  console.log(a3,b3,c3);

  // 필요하지 않은 변수 제거
  console.log('필요하지 않은 변수 제거');

  [,b3,c3] = arr3; // b3,c3이 순서대로 들어가게 하려면 앞에 ,쉼표
  console.log(b3,c3);

  // 나머지 할당
  console.log('나머지 할당');

  const arr4 = [1,2,3,4,5];
  const [a4, ...rrr] = arr4;
  // 나머지 배열은 '...변수'로 할당
  // 전개 연산자는 배열의 나머지 요소를 복사함
  console.log(a4,rrr); // 1,[2,3,4,5]


  console.log('   ');
// 1-2. 객체의 구조분해
console.log('1-2. 객체의 구조분해');

  // 객체 구조 분해 할당하지 않은 경우
  console.log('객체 구조 분해 하지 않은 경우');

  const dog = {
    myName : '구름',
    age : 10
  };

  console.log(dog.myName, dog.age)

  // 객체 구조분해 한 경우
  console.log('객체 구조 분해 한 경우');

  const { myName, age } = dog;
  console.log(myName,age);

  // 기본값 할당, 변수 이름 바꾸기
  console.log('기본값 할당, 변수 이름 바꾸기');

  const dog2 = {
    myName2 : 'Cloud',
    age2 : 10
  };

  const {myName2 ='멍이',age2 = 0, birth2 = '0428'} = dog2;
  console.log(myName2,age2);
  console.log('멍이',birth2);

console.log('   ')
// 선택적 체이닝
console.log('선택적 체이닝')
// ?.룰 사용 하여 객체의 속성에 접근 할 때
//  해당 속성이 없는 경우 undefined를 반환

const user1 = null;
console.log(user1?.chichi); // user1의 chichi속성이 없어서 undefined가 출력

const userCloud = {
    myName : '구름',
    age : 10,
    address : {
        city : 'NYJ City',
        town : 'Onam'
    },
};
const userMeong = {
    myName : '멍이',
    age : 11,
}

function printCity(user) {
    return user.address?.city || '주소 정보가 없습니다.';
}
console.log(printCity(userCloud)); // NYJ City
console.log(printCity(userMeong)); // 주소 정보가 없습니다