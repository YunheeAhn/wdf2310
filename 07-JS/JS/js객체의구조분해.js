// JS - 객체의 구조분해 추가 연습


console.log('JS - 객체의 구조분해')

console.log('1-1. 객체의 구조분해 사용 안하고 하는 경우')


const aribnbIcon = {
    img : 'airbnb.png',
    txt : '한옥',
};

console.log(aribnbIcon.img, aribnbIcon.txt);
// 양이 적어서 괜찮지만 내용이 늘어나면(박스나 다른 텍스트들)
// 그러면 너무 길어지기 때문에 객체의 구조분해를 이용!


console.log('1-2. 객체의 구조분해 사용 하고 하는 경우')
// 객체 구조분해 하여 하는 방법
const {img,txt} = aribnbIcon;
console.log(img, txt);
