/**
 * Created by jiayin on 2016/3/18.
 */
define(['jquery'], function () {
    $('body').append("<!--底部--><div class='partner_link'></div>");
    $('.partner_link').load('../base/helpbase.html .partner_link');
    $('body').append("<!--底部--><div class='footer'></div>");
    $('.footer').load('../base/helpbase.html .footer_nav_box ');
    $('body').append("<!--底部--><div class='copy_box'></div>");
    $('.copy_box').load('../base/helpbase.html .copy_box_inner');
});