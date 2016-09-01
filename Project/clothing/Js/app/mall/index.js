/**
 * Created by jiayin on 2016/1/31.
 */
define(['jquery', 'slick', 'module/totop','module/base'], function () {
    $(document).ready(function () {
       
        $(".banner_middle_box").slick(
            {
                autoplay: true,
                speed: 500,
                fade: true,
                slidesToShow: 1,
                autoplaySpeed: 3000,
                arrows: true,
                prevArrow: '.prev_middel_btn',
                nextArrow: '.next_middel_btn',
                dots: true,
                dotsClass: 'banner_middle_dots'
            });

        $(".banner_right_box").slick(
            {
                autoplay: false,
                speed: 500,
                slidesToShow: 1,
                /*     autoplaySpeed: 3000,*/
                arrows: true,
                prevArrow: '.prev_right_btn',
                nextArrow: '.next_right_btn',
                dots: false,
            });
        $(".banner_box").slick(
            {
                autoplay: true,
                speed: 500,
                fade: true,
              
                slidesToShow: 1,
                autoplaySpeed: 3000,
                arrows: true,
                prevArrow: '.prev_btn',
                nextArrow: '.next_btn',
                dots: true,
                dotsClass: 'banner_dots'
            });
    });
});