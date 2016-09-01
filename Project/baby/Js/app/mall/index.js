/**
 * Created by jiayin on 2016/1/31.
 */
define(['jquery','slick','layer','module/totop'], function () {
    $(document).ready(function () {
        $("#banner").slick(
            {
                autoplay:true,
                speed: 500,
                slidesToShow: 1,
                autoplaySpeed: 3000,
                arrows: false,
                dots: true,
                lazyLoad: 'ondemand',
                dotsClass: 'banner_bottom_btn'
            });

        //layer
        $('.login_btn').click(function () {
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