/**
 * Created by jiayin on 2016/3/18.
 */
define(['jquery','slick','module/footerbase','module/totop','module/share'], function () {
    $(function(){
        //banner
        $('.banner_box').slick({
            autoplay:true,
            autoplaySpeed:3000,
            fade:true,
            slidesToShow: 1,
            arrows: true,
            dots: true,
            draggable: false,
            prevArrow: '.prev_btn',
            nextArrow: '.next_btn'
        });
        //课程安排
        $('#class_items2').slick({
            autoplay: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: false,
            arrows: true,
            dots: false,
            prevArrow: '.prev_btn',
            nextArrow: '.next_btn'
        });

    })

});