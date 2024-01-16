// JS 연산자

console.log('-----------------------------')

// 1. 산술 연산자
console.log('1. 산술 연산자')
//  -> + - * / %(나머지)
console.log(' -> + - * / %(나머지)')

// 1-1. 덧셈 연산자
console.log('1-1. 덧셈연산자')
console.log('1 + 2 =')
console.log(1 + 2) // 3

console.log('가을 + 가을 =')
console.log('가을' + '가을') // 가을가을

// 1-2. 뺄셈 연산자
console.log('1-2. 뺄셈연산자')
console.log('4 - 3')
console.log(4 - 3)

// 1-3. 곱셈 연산자
console.log('1-3. 곱셈연산자')
console.log('2 * 3 =')
console.log(2 * 3)

// 1-4. 나눗셈 연산자
console.log('1-4. 나눗셈연산자')
console.log('6 / 2 =')
console.log(6 / 2)

// 1-5. 나머지 연산자
console.log('1-5. 나머지연산자')
console.log('7 % 3 =')
console.log(7 % 3) //1 나누고 남은 나머지 값
console.log('나머지가 0이면 짝수, 1이면 홀수')
console.log('(now % 슬라이드의 갯수) 나머지가 0일 경우 마지막 슬라이드')

console.log('짝수, 홀수 판별 함수')
console.log('// 함수선언 function isEven(num){return num % 2 === 0; //짝수}')
console.log('// 함수 호출 -> isEven();')
console.log('// 콘솔창에 함수 호출 -> console.log(isEven())')
console.log('// num값이 없거나, 홀수이면 나머지가 1 -> false')
console.log('// num값이 짝수이면 나머지가 0 -> true')

// 함수선언
function isEven(num){
    return num % 2 === 0; //짝수
}
// 함수 호출
isEven();
// 콘솔창에 함수 호출
console.log(isEven())
// num값이 없거나, 홀수이면 나머지가 1 -> false
// num값이 짝수이면 나머지가 0 -> true

console.log('-----------------------------')

// 2. 할당 연산자
console.log('2. 할당 연산자')

let now = 1
console.log(now)

now = now + 1 //now에 1을 더한 값을 now에 다시 할당
now += 1; // 축약형 

console.log(now) //3 축약형을 쓰느라 두번 1이 더해졌기 때문에 값이 3이 됨

let current = 2
console.log(current) //2

current = current * 2
console.log(current) //4

current *= 2 // 축약형
console.log(current) // 8 축약형을 쓰느라 두번 2가 곱해졌기 때문에 값이 8

console.log('-----------------------------')

// 3. 증가와 감소 연산자
console.log('3. 증가와 감소 연산자')
console.log('3-1. 증가 연산자')
console.log('3-2. 감소 연산자')

console.log('-----------------------------')

// 4. 부정 연산자
console.log('4. 부정 연산자')
console.log('! 를 사용하여 값을 바꿀 수 있다.')
console.log('반대값으로 출력 ex)true -> false / false -> true')

console.log('!true = ')
console.log(!true)
console.log('!false = ')
console.log(!false)

console.log('0 = ')
console.log(0)
console.log('!0 = ')
console.log(!0)
console.log('!!0 = ')
console.log(!!0)

console.log('-----------------------------')

// 5. 비교 연산자
console.log('5. 비교 연산자')
console.log('===, !==, >, <, <=, >=, == , !=')
console.log('단, == , != 이 두가지는 형 변환이 일어나므로 사용하지 않는 것이 좋다')

// 5-1. 일치 연산자
console.log('5-1. 일치 연산자')
console.log('1 === 1')
console.log(1 === 1) // true, 일치

console.log("1 === '1'")
console.log(1 === '1') //false, 불일치

// 5-2. 불일치 연산자(형변환X)
console.log('5-2. 불일치 연산자')
console.log('1 !== 1')
console.log(1 !== 1) // false
console.log("1 !== '1'")
console.log(1 !== '1') // true

// 5-3. 대소 비교 연산자 (형변화D)
console.log('5-3. 대소 비교 연산자 (형변화D)')
console.log(1 < 2) // true
console.log(1 <= 2) // true
console.log(1 > 2) // falwe
console.log(1 >= 2) // false

console.log('-----------------------------')

// 6. 논리 연산자
console.log('6. 논리연산자')
console.log('&&, ||')
console.log('             ')

console.log('6-1. AND 연산자  && ')
console.log('연산자를 기준으로 모두가 참이라면 true')
console.log('연산자를 기준으로 둘 중 하나만 참이면 false')
console.log('연산자를 기준으로 가장 먼저 만나는 거짓데이터(false) 반환')

console.log('             ')

console.log('true && true')
console.log(true && true) // true

console.log('             ')

console.log('true && false')
console.log(true && false) // false

console.log('             ')

console.log('1 < 2 && 2 < 3')
console.log(1 < 2 && 2 < 3) //true

console.log('             ')

console.log('1 && 0')
console.log(1 && 0) //0 false값인 0을 반환

console.log('             ')

console.log('1 && 2 && 0')
console.log(1 && 2 && 0) // 0 false값인 0을 반환

console.log('             ')

console.log('1 && 0 && false')
console.log(1 && 0 && false) // 0 가장 먼저 만난 false값인 0을 반환

console.log('             ')

console.log("'a' && 'b' && ''")
console.log('a' && 'b' && '') // '' 가장 먼저 만난 false값인 ''(빈문자)를 반환

console.log('             ')

console.log("'a' && 'b' && 'c'")
console.log('a' && 'b' && 'c') // C 모두가 참인 경우, 가장 마자막 true값을 반환






console.log('             ')

console.log('6-2. OR 연산자 || ')
console.log('연산자를 기준으로 둘 중 하나만 참이면 true')
console.log('연산자를 기준으로 모두가 거짓이라면 false')
console.log('연산자를 기준으로 가장 먼저 만나는 참데이터(true) 반환')

console.log('             ')

console.log('true || true')
console.log(true || true)  // true
console.log('             ')

console.log('true || false')
console.log(true || false) // true
console.log('             ')

console.log('false || false')
console.log(false || false) //false


// 병합 연산자
console.log('6-3. Nullist 병합 연산자 ?? ')


console.log('-----------------------------')
console.log('-----------------------------')
console.log('-----------------------------')
console.log('-----------------------------')