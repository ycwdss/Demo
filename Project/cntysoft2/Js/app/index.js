/**
 * Created by liu on 15-12-19.
 */

define(['jquery','slick','model/totop'], function () {
    $(function () {  

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
    })
});