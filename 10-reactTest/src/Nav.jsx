// 컴포넌트 분리 파일명 작성시 첫글자는 대문자

// import
import styled from 'styled-components';



// nav화살표 함수
const Nav = ( propsDnav ) => {
    console.log(propsDnav)
    // console.log(propsDnav.nav)
    // console.log(propsDnav.nav[0])
    // console.log(propsDnav.nav[0].title)
    // console.log(propsDnav.nav[1].title)
    // console.log(propsDnav.nav[2].title)
    // console.log(propsDnav.nav[3].title)
    // console.log(propsDnav.nav[4].title)
    // console.log(propsDnav.nav[5].title)
    // console.log(propsDnav.nav[6].title)
   const list = [];
    return (
        <Nv>헤더메인네브
        <ul>
            {/* 배열이름.map((item, index) => {}) */}
            {/* item = 객체, 들어올 정보 */}
            { propsDnav.nav.map((item, index) => (
                <li key={index}>
                    <a href={'/sub/' + item.title + '.html' }>{item.title}</a>
                </li>
                ))
            }
        </ul>
        </Nv> 
        )
    }
  // nav 컴포넌트
  const Nv = styled.nav`
    color : Gray;
    font-size : 16px;
    `
//   const Ull = styled.ul`
//     color : cyan;
//     font-size : 12px;`
//   const Lii = styled.li`
//     color : pink;`


const NavMobile = ( propsNav ) => {
    // const arr = [1,2,3]
    // console.log(propsNav) // 출력값 -> {nav : Array(3)}
    // console.log(propsNav.nav) // 출력값 -> (3)[{...},{...},{...}]
    // console.log(propsNav.nav[0].title) // 출력값 -> html
    // console.log(propsNav.nav[1].title) // 출력값 -> css
    // console.log(propsNav.nav[2].title) // 출력값 -> javascript

    // for문으로 <li>의 list작성
    const list = []
    for (let i = 0; i < propsNav.nav.length; i++) {
        // list라는 빈 배열에 push()
        list.push(
            <li key={i} >
                <a href={'/sub/' + propsNav.nav[i].title + '.html'}>{propsNav.nav[i].title}</a>
            </li>
        )
    }

    return (
        <nav>네브모바일
            <ul>
                {/* 문자가 아닌 데이터를 받을 땐 중괄호로 감싼다 */}
                {list}
            </ul>
        </nav>
    )
}



export default Nav;
export { NavMobile };