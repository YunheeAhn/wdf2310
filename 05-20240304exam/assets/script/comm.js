$(function() {
    let now = 0;

    const slideCount = $('.slide-list li').length;

    const slideMain = $('.slide-list');

    setInterval(function () {

        now = (now + 1) % slideCount;

        slideMain.css('left', 100 * - now + '%')
    },3000)


    $('.depth1.tab').on('click',function() {
        $('#modal').css('display','block')
    })
    $('.btn-close').on('click',function() {
        $('#modal').css('display','none')
    })
})