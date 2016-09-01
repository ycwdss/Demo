/**
 * Created by wangzan on 2016/3/18.
 */
define(['jquery','slick','module/base','module/totop'],function () {
    $(document).ready(function () {
        $('.banner_box').slick({
            autoplay:true,
            autoplaySpeed:3000,
            fade:true,
            slidesToShow: 1,
            arrows: true,
            dots: true,
            draggable: false,
            dotsClass:'banner_dots',
            prevArrow: '.prev_btn',
            nextArrow: '.next_btn',
        });
        $('.better_box').slick({
            slidesToShow: 3,
            slidesToScroll:3,
            arrows: true,
            dots: false,
            draggable: false,
            prevArrow: '.better_prev',
            nextArrow: '.better_next',
        });
        $('.brand_box').slick({
            slidesToShow:1,
            slidesToScroll:1,
            arrows: true,  
            dots: false,
            draggable: false,
            prevArrow: '.brand_prev',
            nextArrow: '.brand_next',
        });
    });
});