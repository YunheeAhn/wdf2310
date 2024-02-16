// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     slidesPerView: 1,
//     // spaceBetween: 30,
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

//   스와이퍼 연습

// ---------------------------
// 준비이벤트
// html페이지를 로드한 후 실행
// $(document).ready(function(){})



$(function() {
  // gnb 마우스오버
$('#gnb .depth1 > li').on('mouseenter',function(){
  $(this).find('.depth2').stop().slideDown(300);
})

// 모달
  // 모달창 열기
  // $('.list-bbs li:first-child').click(function(){
  //   $('.dimmed').show();
  // })윤희코딩

  

  $('.list-bbs li:first-child').on("click",function(){
    $('.dimmed').show();
  });

  // 모달창 닫기
  // $('.btn-close').click(function(){
  //   $('.dimmed').hide();
  // })윤희코딩
  const $modal = $('#modal'); // #modal 중복을 하나로 빼줌
  $modal.find('.btn-close').on('click',function(){
  $modal.hide();
}); 

  // $('.btn-close,.dimmed').on("click",function(){
  //   $('.dimmed').hide();
  // });

  //tabs
// 기본 세팅
// active 삭제
// #tabs공통->하나로 빼주기
const $tabs = $('#tabs');


$tabs.find('.sec-g').removeClass('active');
// active 추가
$tabs.find(".sec-g:first-child").addClass('active');

// 클릭 했을때
$tabs.find('.sec-tit').on('click',function (){
  // 기존에 있는거 삭제
  $tabs.find('.sec-g').removeClass('active');
  // this(그 아이의 부모에게) .active 추가
  $(this).parent().addClass('active');

});


// gnb변수 선언
const $gnb = $('#gnb');
const $gnbDepth1 = $gnb.find('.depth1 > li');


$gnbDepth1.on('mouseleave',function(){
  $(this).find('.depth2').slideUp(500);
  $(this).children('a').css({
    'background-color':'#fff',
    color:'#333'
  })
});

$gnbDepth1.on('mouseenter', function(){
  $(this).find('.depth2').slideDown(500);
  // key값이 2개 이상일 때는 {}로 묶어서 처리
  // {key1:value1, key2:value2}
  $(this).children('a').css({
    'background-color':'#e20590',
    color:'#fff'
  })
});  

// ----------------------------------------------------------------
// 슬라이드
// 3초마다 슬라이드가 이동
// setInterval(함수, 시간)
// .list-slide의 left 값이 이동

// now의 값 할당, 재할당 가능 해야 함
// let now = 0;

// setInterval(function(){

  // now의 값이 변해야 하니, 1씩 증가하는 연산 적용
  // now값을 재할당
  // now = now + 1; //now는 변수이기 때문에 앞에 쓰고, 재할당이기 때문에 let을 안씀
  // 이렇게 쓰면 계속 늘어만 나기때문에 조건문으로 브레이크를 걸어줘야 함
  // 나머지 재할당
  // 현재 now=now+1,처음 선언한 now변수는0, 재할당시 now+1쪽 now로 값이 들어옴 왜? 재할당이라서
  // => now(1번째값)=now(0)+1 , -100%
  // => now(2번째값)=now(1)+1 , -200%
  // => now(3번째값)=now(2)+1 , -300%인데 되면 안되기 때문에 다시 0값으로 돌리려면 나머지 연산자를 사용
  // now = (now + 1) % 3; // 슬라이드 갯수만큼 나눔

  // $('.list-slide').css({
  //   left : 100 * now * -1 + "%",
    // 0%,-100%,-200%,0% 순서의 반복
    // now값에 0,1,2,0 순서로 들어옴
//   });
// },5000)

let now = 0;
const $slide = $('.list-slide');
const slideCount = $('.list-slide li').length;

setInterval(function(){
  

  now = (now + 1) % slideCount

  updateSlidePosition();
},5000)

function updateSlidePosition() {
  $slide.css({
    left : 100 * now * -1 + "%",
  });
}
// ----------------------------------------------------------------



});




