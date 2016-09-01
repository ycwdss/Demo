/**
 * Created by jiayin on 2016/1/13.
 */
define(['jquery','lazyload','module/totop','module/drop'],function(){
    //延迟加载
    $(function(){
        $(".lazy").lazyload({
            threshold: 10,
            effect: "fadeIn",
            placeholder: "/Statics/Skins/Images/pc/lazyicon.png"
        });
    });


    //登录
    $('.top_bar').find('.t_login').click(function () {
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/login.html .login_box')
    });
    //注册
    $('.top_bar').find('.t_register').click(function () {
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/register.html .register_box')
    });
    //点差关闭

    $('.offbtn  i').live('click',function () {
        $('.popup_wrap').remove();
    });


});