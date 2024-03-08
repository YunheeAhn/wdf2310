// 생성자 함수 
// new 연산자를 통해 객체를 생성
// 일반 함수와 구분하기 위해 첫글자를 대문자로
console.log('생성자 함수')
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
        return `${this.name}는 ${this.price}원 입니다.q`
    }
}
console.log(americano.front())

const latte = {
    name : '라떼',
    price : 4500,
    front : function() {
        return `${this.name}는 ${this.price}원 입니다.w`
    }
}
console.log(latte.front())

// 알고 난 후 프로토 타입 활용한 메소드 생성

function Front(name, price) {
    // this.newName => 새로 할당 받을 것들(ex-아메리카노, 라떼, 카푸치노 등)
    this.NameProto = name
    this.PriceProto = price
}

// 메소드 생성하기
Front.prototype.calling = function() {
    return `${this.NameProto}는 ${this.PriceProto}원 입니다 프로토타입`
}

// Front 생성자 함수 사용 해서 객체 생성
const ameProto = new Front('아메리카노',4000)
const latteProto = new Front('고소한라떼',4500)

console.log(ameProto)  //객체로 생성
console.log(latteProto) //객체로 생성

// 콜링으로 불러오기
console.log(ameProto.calling())
console.log(latteProto.calling())

console.log('생성자 함수로 프로토타입 생성 하고 각각 객체 생성해서 하니까 내용이 많아지면 힘들어짐')
console.log('->ES6문법 클래스 함수로 바꾸기')

// 클래스 함수(es6)
// Front 클래스를 생성
class FrontClass {
    // 생성자 함수 역할을 하는 constructor로 객체 생성하기
    constructor(nameC,priceC) {
        this.nameClass = nameC
        this.priceClass = priceC
    }

    // 메소드 생성하기 
    // 따옴표 구분X
    calling() {
        return `${this.nameClass}는 ${this.priceClass}원 입니다클래스함수`
    }

    
}

// 생성자 함수를 사용 해서 객체 생성
const ameClass = new FrontClass('아메리카노',2500)
const latteClass = new Front('라떼',3000)

console.log(ameClass.calling())
console.log(latteClass.calling())


class FrontClass2 {
    constructor(nameC2,priceC2,sizeC2) {
        this.nameClass2 = nameC2
        this.priceClass2 = priceC2
        this.sizeClass2 = sizeC2
    }

    getPrice() {
        if(this.sizeClass2 ==='large') {
            return this.priceClass2 + 700
        } else if (this.sizeClass2 ==='small') {
            return this.priceClass2 - 700
        } else {
            return this.priceClass2
        }
        
    }

    calling() {
        return `${this.nameClass2} ${this.sizeClass2} 사이즈의 가격은 ${this.getPrice()}원 입니다`
    }
}
const ameClass2 = new FrontClass2('아메리카노',2500,'large')
const latteClass2 = new FrontClass2('라떼',3000,'tall')
const cappuClass2 = new FrontClass2('카푸치노',3000,'small')

console.log(ameClass2.calling())
console.log(latteClass2.calling())
console.log(cappuClass2.calling())

