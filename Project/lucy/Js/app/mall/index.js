/**
 * Created by jiayin on 2016/1/16.
 */
define(['jquery', 'slick','module/base'], function () {
    $(function () {
        $('.banner_box').slick({
            dots: true,
            arrows: true,
            prevArrow: '.prev',
            nextArrow: '.next',
            easing: 'linear',
            fade: true,
            dotsClass: 'btn_dots'
        });
        //产品切换
        $('.procard').on('init', function () {
            $('.procard').css({
                "height":"auto",
                "overflow":"visible"
            });
        });
        $("#slide_card").slick({
            dots:false,
            autoplay: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
            draggable: false,
            arrows: true,
            lazyLoad: 'ondemand',
            prevArrow: '.page_btn_left',
            nextArrow: '.page_btn_right'
        });
    });
});