/**
 * Created by jiayin on 2016/1/31.
 */
define(['jquery', 'slick','layer','module/base'], function () {
    $(document).ready(function () {
        //$(document).scroll(function() {
        //    console.log($(document).scrollTop(), $('.footer').offset().top,$('.bar').offset().top);
        //});
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
        $('.bar .bar_item').click(function () {
            var index = $(this).index();
            if (index == 3) {
                $('html,body').animate({
                    scrollTop: '0px'
                }, 800);
            } else {
                $('html,body').animate({
                    scrollTop: $('.content').children().eq(index + 1).offset().top
                }, 800);
            }
            return false;
        });
        //layer
        $('.nav_cart').click(function () {
            layer.confirm('您是如何看待前端开发？', {
                btn: ['重要', '奇葩'] //按钮
            }, function () {
                layer.msg('的确很重要', {icon: 1});
            }, function () {
                layer.msg('也可以这样', {
                    time: 20000, //20s后自动关闭
                    btn: ['明白了', '知道了']
                });
            });
        });


    });
});