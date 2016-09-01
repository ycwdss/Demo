/**
 * Created by wangzan on 2016/2/23.
 */
define(['jquery'], function () {
    //头部底部
    $('body').prepend("<!--头部--><div class='header'></div>");
    $('.header').load('base.html .header_content');

    $('body').append("<!--底部--><div class='footer'></div>");
    $('.footer').load('base.html .footer_content ');
    
});