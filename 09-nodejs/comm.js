import hello from './module.js'
// module.js파일의 hello함수 불러오기

hello();
// 모듈화 한 함수 호출

import {name, age as num, info} from './module.js'

console.log(name)
console.log(num)
console.log(info)

import {a,b} from './index.js'

a();
b();