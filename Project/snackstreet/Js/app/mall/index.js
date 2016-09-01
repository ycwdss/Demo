/**
 * Created by Administrator on 2016/1/16.
 */
define(['jquery','slick','layer','totop','qrcode','module/qrcode'],function(){
    $(function(){
        $('.banner_box').slick({
            autoplay:2000,
            dots:true,
            fade:true,
            dotsClass:'dots'
        });
        $('.floor_title_right a').hover(function(){
            var n = $(this).index();
            $(this).siblings().removeClass('main');
            $(this).addClass('main');
            $(this).parents('.floor').find('.floor_content').hide();
            $(this).parents('.floor').find('.floor_content').eq(n).show();
        });
        $('.register_btn').click(function(){
            if(!$(this).hasClass('main')){
                $('.login_btn').removeClass('main main_border');
                $('.login_content').hide();
                $('.register_content').show();
                $(this).addClass('main main_border');
                $('.login').css('height','485px');
            }
        });
        $('.login_btn').click(function(){
            if(!$(this).hasClass('main')){
                $('.register_btn').removeClass('main main_border');
                $('.register_content').hide();
                $('.login_content').show();
                $(this).addClass('main main_border');
                $('.login').css('height','455px');
            }
        });

        //layer
        $('.head_left').click(function () {
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

    })
});