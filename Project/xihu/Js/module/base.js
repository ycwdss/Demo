/**
 * Created by wangzan on 2016/2/23.
 */
define(['jquery', 'colpick'], function () {
    //头部底部
    $('body').prepend("<!--头部--><div class='header'></div>");
    $('.header').load('../base/base.html .header_box')

    $('body').append("<!--底部--><div class='footer'></div>");
    $('.footer').load('../base/base.html .footer_box')
    $('body').prepend("<!--选择颜色--><div class='color_wrap'></div>");
    $('.color_wrap').load('../base/base.html .color_box')
    //登陆
    $('.unlogin').find('.login').live('click', function () {
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/login.html  .popup_box');
    });
    //新注册
    $('.unlogin').find('.reg').live('click', function () {
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/login.html  .popup_box');
    });
    $('.popup_list ').find('.new_user').live('click', function () {
        $(this).closest('.popup_wrap').remove();
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/login.html  .popup_box');
    });
    //忘记密码
    $('.popup_list ').find('.forget_pw').live('click', function () {
        $(this).closest('.popup_wrap').remove();
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/find_password.html  .input_tel');
    });
    $('.input_tel').find('.next_step').live('click', function () {
        $(this).closest('.popup_wrap').remove();
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/find_password.html  .new_pw');
    });
    $('.new_pw').find('.next_step').live('click', function () {
        $(this).closest('.popup_wrap').remove();
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/find_password.html  .set_succeed');
    });
//点叉关闭
    $('.popup_box h1 i').live('click', function () {
        $('.popup_wrap').remove();
    });
//退出登录
    $('.logined ul li:last-child').live('click', function () {
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/quit_login.html  .quit_login');
    });
    $('.popup_list a').live('click', function () {
        $(this).closest('.popup_wrap').remove();
    });
    //记住密码
    $('.popup_list .remember i,.popup_agree i').live('click', function () {

        if ($(this).hasClass('icon-duihao')) {
            $(this).removeClass('icon-duihao main_bg main_border');
        } else {
            $(this).addClass('icon-duihao main_bg main_border');
        }
    });

    //返回顶部
    $('.bar .bar_item').click(function () {
        var index = $(this).index();
        if (index == 3) {
            $('html,body').animate({
                scrollTop: '0px'
            }, 800);
        }
    });
    $('.bar .bar_item').hover(function () {
        $(this).addClass('main_bg');
    }, function () {
        $(this).removeClass('main_bg');
    });
    //选择颜色
/*    $('.color_wrap').colpick({
        layout:'rgbhex',
        color:'red',
        onSubmit:function(hsb,hex,rgb,el) {

            //字体颜色
            $('.main').addClass('change_color');

            $('.main').css('color', '#'+hex);
            $(".main_bg").css({
                "backgroundColor":'#'+hex,
                'color':'#fff'
            });
            $('.main_border').css('borderColor','#'+hex);
            $('.main_hover').hover(function () {
                $(this).css('color','#'+hex);
            }, function () {
                $(this).css('color','');
            });
            $('.mainbg_hover').hover(function () {
                $(this).css('backgroundColor','#'+hex);
            }, function () {
                $(this).css('backgroundColor','');
            });
            $('.mainbd_hover').hover(function () {
                $(this).css('borderColor','#'+hex);
            }, function () {
                $(this).css('borderColor','');
            });
            $('.main_focus').focus(function () {
                $(this).css('borderColor','#'+hex);
            });
            $('.main_focus').blur(function () {
                $(this).css('borderColor','');
            });

            $(el).colpickHide();
        }
    });*/
});