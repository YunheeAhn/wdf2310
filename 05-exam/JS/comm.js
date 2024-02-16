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
$(document).ready(function(){})

$(function() {
  // 모달창 열기
  // $('.list-bbs li:first-child').click(function(){
  //   $('.dimmed').show();
  // })윤희코딩

  $('.list-bbs li:first-child').on("click",function(){
    $('.dimmed').show();
  })

  // 모달창 닫기
  // $('.btn-close').click(function(){
  //   $('.dimmed').hide();
  // })윤희코딩
  $('.btn-close,.dimmed').on("click",function(){
    $('.dimmed').hide();
  })

})



//tabs
// 기본 세팅
// active 삭제
$('#tabs .sec-g').removeClass('active');
// active 추가
$("#tabs .sec-g:first-child").addClass('active');

// 클릭 했을때
// $('#tabs .sec-tit').on('click',function () {
  // 기존에 있는거 삭제
  // $('#tabs .sec-g').removeClass('active');
  // this(그 아이의 부모에게) .active 추가
  // $(this).parent().addClass('active');
// });

$('#tabs .sec-tit').on('click', function () {
  // 기존에 있는 거 삭제
  $('#tabs .sec-g').removeClass('active');
  // this(클릭된 h2의 부모인 section에게) .active 추가
  $(this).parent().addClass('active');
});