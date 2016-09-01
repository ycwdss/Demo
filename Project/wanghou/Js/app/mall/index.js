/**
 * Created by wangzan on 2016/1/7.
 */
define(['jquery','slick','layer','totop'], function () {

    $(document).ready(function () {
        $('.banner_box,.p_big').slick({
            dots: true,
            arrows:false,
            infinite: true,
            autoplay:true,
            autoplaySpeed:2000,
            easing:'linear',
            fade:true,
            dotsClass:'btn_dots'
        });
        $('.p_slider').slick({
            dots:false,
            arrows:true,
            infinite: true,
            draggable:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:500,
            prevArrow:'.left_btn',
            nextArrow:'.right_btn'
        });
        //layer
        $('.left_bar').click(function () {
            layer.confirm('您是如何看待前端开发？', {
                btn: ['重要','奇葩'] //按钮
            }, function(){
                layer.msg('的确很重要', {icon: 1});
            }, function(){
                layer.msg('也可以这样', {
                    time: 20000, //20s后自动关闭
                    btn: ['明白了', '知道了']
                });
            });
        });


    });
});