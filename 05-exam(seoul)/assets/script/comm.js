// 슬라이드 이미지 변경하기
$(function() {
    let now = 0;
    // 슬라이드 갯수 알아내는 변수
    const slideCount = $('.slide ul li').length;
    // 슬라이드 묶음 변수 선언
    const slideMain = $('.slide ul');

    // // 슬라이드 이동 함수 만들기
    // function moveSlide() {
    //     slideMain.css('left', 100 * -now + '%')
    // }
    //=> 운영성 고려하여 함수를 밖으로 빼는게 좋지만 시험 볼땐 하지 말자 

    // setInterval로 3초 마다 슬라이드 이동
    setInterval(function() {
        // now값을 1씩 증가 시킨 뒤
        // slideCount의 수 만큼 나눠서 나오는
        // 나머지 값을 now에 대입

        // => (0 + 1) % 3 = 1
        // => (0 + 1) % 3 = 2
        // => (0 + 1) % 3 = 0
        now = (now + 1) % slideCount //now의 나머지 값 구하기
        // moveSlide(); // moveslide로 함수 실행하기
        slideMain.css('left', 100 * -now + '%') // 함수 실행하기
    },3000)

    // 탭 변환
    $('.tab-tit').on('click',function(){
        // 클릭 이벤트 막기
        event.preventDefault()

        $('.tab').removeClass('active');
        $(this).parents('.tab').addClass('active')
    })

    // 모달창 활성화
    $('.notice .notice-list li:first-child').on('click', function() {
        $('#modal').css('display','block')
    })
    // 모달창 비활성화
    $('#btnClose').on('click', function() {
        $('#modal').css('display','none')
    })
}) 
