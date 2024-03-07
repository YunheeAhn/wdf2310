// 생성자 함수 
// new 연산자를 통해 객체를 생성
// 일반 함수와 구분하기 위해 첫글자를 대문자로

const animals = new Array ('dog','cat','bird')
console.log(animals) // animals 생성자 함수 불러오기
console.log(animals.length) // animals 생성자 함수의 배열의 길이
console.log(animals[1]) // animals 생성자 함수의 [1]번째 값


// 프로토타입을 이용하여 메소드 생성

// 알기 전
const americano = {
    name : '아메리카노',
    price : 4000,
    front : function() {
        return `${this.name}는 ${this.price}원 입니다.`
    }
}
console.log(americano.front())

const latte = {
    name : '라떼',
    price : 4500,
    front : function() {
        return `${this.name}는 ${this.price}원 입니다.`
    }
}
console.log(latte.front())

// 알고 난 후