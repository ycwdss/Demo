/**
 * Created by wangzan on 2016/3/14.
 */
define(['jquery','layer','slick','module/totop'], function () {

    $(document).ready(function () {
        // banner
        $('.banner_box').slick({
            dots: true,
            arrows: false,
            dotsClass: 'banner_bottom_btn',
            easing: 'linear'
        });

        $('.news_tab li a').hover(function () {
            $(this).addClass('main_bg').parent().siblings().children().removeClass('main_bg');
        });

    });
});