// 비동기 처리
// 작업을 동시에 처리 하는 것 <-> 동기처리

console.log('슈렉 프라푸치노 주문')
console.log('아메리카노 주문')
console.log('슈렉 프라푸치노 제공')
console.log('아메리카노 제공')

  //1. 비동기 처리 해보기
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

  //2.  콜백 함수를 이용한 비동기 처리
function orderCoffee2(coffee,callback) {
    console.log(`${coffee} 주문 완료`)
    setTimeout(()=> {
        console.log(`${coffee}를 마십니다`)
        callback()
    },3000)
}
function drinkCoffee2(coffee) {
    console.log('커피를 마신다.')
}

function drinkCoffee3() {
    return '커피를 마십니다ㅇㅇㅇㅇㅇ'
}
orderCoffee2('아메리카노',drinkCoffee3)
drinkCoffee2()
console.log(drinkCoffee3())

  // 3. promise로 비동기 처리하기
//   생성자 함수 만들기
//   인수 두가지 생성하기(성공했을 떄, 실패 했을 떄)
const coffeOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('아메리카노 준비 완료 프로미스 객체 이용 예정')
    },3000)
})
// 프로미스객체 이용하기
coffeOrder
    // 성공했을때
    .then((props) => {
        console.log(props)
    })
    // 실패 했을 때
    .catch((error) => {
        console.log(error)
    })

const cooffeOrder2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        if(Math.random() > 0.5) {
            resolve('아메리카노 랜덤 준비완료')
        }else {
            reject('아메리카노 랜덤 준비실패')
        }
    },1000)
})
cooffeOrder2
    // 성공했을때
    .then((props) => {
        console.log(props)
    })
    // 실패 했을 때
    .catch((error) => {
        console.log(error)
    })
