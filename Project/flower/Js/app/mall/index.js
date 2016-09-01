/**
 * Created by jiayin on 2016/1/31.
 */
define(['jquery', 'slick','module/search','module/base'], function () {
    $(function () {
        //广告
        $('.banner_inner').slick({
            dots: true,
            arrows: true,
            prevArrow: '.prev',
            nextArrow: '.next',
            easing: 'linear',
            fade: true,
            dotsClass: 'btn_dots'
        });


    });
});