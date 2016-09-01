/**
 * Created by wangzan on 2016/2/23.
 */
define(['jquery'], function () {
    //头部底部
    $('body').prepend("<!--头部--><div class='header'></div>");
    $('.header').load('../base/base.html .header_box')

    $('body').append("<!--底部--><div class='footer'></div>");
    $('.footer').load('../base/base.html .footer_box')
    //搜索
    $('.nav_search span').live('click',function () {   
        $(this).prev().addClass('input_unfold').animate({width: '180px'}, 300);
    });
});