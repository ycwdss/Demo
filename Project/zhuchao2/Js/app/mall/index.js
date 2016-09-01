/**
 * Created by jiayin on 2016/3/10.
 */
define(['jquery2.1.4', 'slick', 'layer', 'module/totop'], function () {
    $(document).ready(function () {
        // banner
        $('.banner_box').slick({
            dots: true,
            arrows: true,
            dotsClass: 'banner_bottom_btn',
            easing: 'linear'
        });
        //产品切换
        var proBox = $('div[pro-box^="pro-box"]');
        //循环初始化每个展示商品
        for (var i = 1; i < proBox.length + 1; i++) {
            $('div[pro-box^="pro-box' + i + '"]').slick({
                dots: false,
                arrows: true,  
                easing: 'linear',
                prevArrow: ".left_btn" + i,
                nextArrow: ".right_btn" + i
            });

        }

        //layer
        $('.register_btn').click(function () {
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