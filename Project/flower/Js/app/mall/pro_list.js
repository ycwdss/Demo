/**
 * Created by jiayin on 2016/2/15.
 */
define(['jquery', 'slick','module/base'], function () {
    $(function () {
        //点击搜索
        $('.icon_search').click(function () {
            $('.search_box').slideToggle(200);
        });
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
        //人气单品轮播
        $('.hot_slide').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            focusOnSelect: true,
            prevArrow: '.hot_prev',
            nextArrow: '.hot_next'
        });

    });
});