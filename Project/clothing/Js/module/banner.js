/**
 * Created by wangzan on 2016/3/7.
 */
define(['jquery','slick'], function () {
    $(document).ready(function () {
        //轮播
        $('.banner_box').slick({
            dots: true,
            arrows: true,
            infinite: true,
            prevArrow: '.prev_btn',
            nextArrow: '.next_btn',
            easing: 'linear',
            fade: true,
            draggable: false,
            speed: 500,
            autoplay: true,
            dotsClass: 'banner_dots'
        });
    });
})