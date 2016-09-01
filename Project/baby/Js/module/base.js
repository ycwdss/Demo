/**
 * Created by wangzan on 2016/2/23.
 */
define(['jquery'], function () {
    //头部底部
    $('body').prepend("<!--头部--><div class='l_nav'></div>");
    $('.l_nav').load('../base/base.html .l_nav');
    $('body').prepend("<!--头部--><div class='header_search'></div>");
    $('.header_search').load('../base/base.html .l_head');

    $('body').prepend("<!--头部--><div class='header_top'></div>");
    $('.header_top').load('../base/base.html .header_top');


    $('body').append("<!--底部--><div class='footer'></div>");
    $('.footer').load('../base/base.html .footer_inner')

    /*
     * 登录
     * */
    $('body').append("<!--登录--><div class='login hide'></div>");
    $('.login').load('../login/login.html .login_box', function () {
        $('.login_btn').click(function () {
            $('.login').show();
        });
        $('.login_auto').find('i').on('click', function () {
            if (!$(this).hasClass('icon-duihao')) {
                $(this).addClass('icon-duihao')
            } else {
                $(this).removeClass('icon-duihao');
            }
        });
        $('.login_close').on('click', function () {
            $('.login').hide();
        });
    });
    /*
    注册
    * */
    $('body').append("<!--注册--><div class='register hide'></div>");
    $('.register').load('../login/register.html .register_box',function(){
        $('.register_btn').click(function(){
            $('.register').show();
        });
        $('.login_auto').find('i').on('click', function () {
            if (!$(this).hasClass('icon-duihao')) {
                $(this).addClass('icon-duihao')
            } else {
                $(this).removeClass('icon-duihao');
            }
        });
        $('.register_close').on('click', function () {
            $('.register').hide();
        });

    });
});