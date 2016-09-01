/**
 * Created by wangzan on 2016/2/23.
 */
define(['jquery','module/totop'], function () {
    //登录
    $('.header_icon').find('.h_login').click(function () {
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/login.html .popup_box')
    });
    //注册
    $('.header_icon').find('.h_register').click(function () {
        $('body').prepend("<div class='popup_wrap'></div>");
        $('.popup_wrap').load('../login/register.html .popup_box')
    });
    //点差关闭

    $('.popup_title i').live('click',function () {
        $('.popup_wrap').fadeOut(200);
    });


    //记住密码
    $('.login_auto  .check').live('click',function () {

        var $this=$(this);
        if($this.hasClass('icon-duihao')){
            $this.removeClass('icon-duihao');
        }else{
            $(this).addClass('icon-duihao');
        }
    });


});