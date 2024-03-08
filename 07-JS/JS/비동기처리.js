// 비동기 처리
// 작업을 동시에 처리 하는 것 <-> 동기처리

console.log('슈렉 프라푸치노 주문')
console.log('아메리카노 주문')
console.log('슈렉 프라푸치노 제공')
console.log('아메리카노 제공')

  //비동기 처리 해보기
//   setTimeout() 이용
console.log('슈렉 프라푸치노 주문-1번으로 받았는데')
console.log('아메리카노 주문-두번째로 주문받았는데')

setTimeout(() => {
    console.log('슈렉 프라푸치노 제공-제작 오래걸려서 아메리카노보다 늦게 나옴')
},3000)

console.log('아메리카노 제공-슈렉푸라푸치노보다 먼저 나옴')

// 비동기 처리를 사용해서 코드를 작성하면
// 코드가 실행되는 순서와 실제로 실행되는 순서를 다르게 만들 수 있다.

// 예제 적용하기
function orderCoffee(drink,time) {
    console.log(`${drink}는 ${time / 1000}초 정도 소요 됩니다`)

    setTimeout(() => {
        console.log(`${drink} 제공 완료 / 소요시간 : ${time / 1000}초`)
    },4000)
}
orderCoffee('아메리카노',4000)