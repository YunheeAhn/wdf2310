// js dom

// js파일에서 wrap 잡기
document.querySelector('.wrap').style.border = '1px solid #c9c98a'
document.querySelector('.wrap').style.borderRadius = '10px'
document.querySelector('.wrap').style.padding = '10px'
document.querySelector('header').style.height = '100px'
document.querySelector('header').style.padding = '10px'

const parent = document.querySelector('.wrap')
    console.log(parent.childNodes)
    console.log(parent.firstChild)
    console.log(parent.firstElementChild)
    console.log(parent.lastChild)
    console.log(parent.lastElementChild)
    console.log(parent.parentNode)
    console.log(parent.parentElement)


document.getElementById('main').style.color = 'purple'
document.getElementById('main').style.backgroundColor = 'lightblue'
document.getElementById('main').style.height = 'auto'
document.getElementsByClassName('main')[0].style.border = '1px solid red'
document.querySelector('section p').style.border = '3px solid green'

const queryAll = document.querySelectorAll('li');
queryAll.forEach((li) => (li.style.backgroundColor = 'yellow'))
queryAll.forEach((li) => (li.style.color = 'black'))

// html 요소 변경
// document.getElementByClassName('sidebar')[0].textContent = '사이드바' // 요소의 텍스트를 변경한다.
// document.getElementByClassName('sidebar')[0].innerHTML = '<h2>사이드바</h2>' // 요소의 HTML을 변경한다.
// document.getElementByClassName('sidebar')[0].style.backgroundColor = 'lightgray' // 요소의 스타일을 변경한다.

document.querySelector('.link').setAttribute('href', 'http://google.com') // 요소의 속성을 변경한다.
document.querySelector('.link').textContent = '구글로 이동' // 요소의 텍스트를 변경한다.

const newElement = document.createElement('div')
newElement.textContent = '새로운 요소'

document.querySelector('.sidebar').appendChild(newElement) // 요소를 추가한다.

// .sidebar의 마지막 자식 요소를 제거한다.
document.querySelector('.sidebar ul').lastElementChild.remove() // 요소를 제거한다.


// dom 이벤트
const btn = document.querySelector('#btn')
btn.addEventListener('click', () =>{
    console.log('버튼 클릭')
})