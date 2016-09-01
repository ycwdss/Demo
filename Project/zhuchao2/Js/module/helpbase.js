/**
 * Created by jiayin on 2016/3/11.
 */
define(['jquery'], function () {
    //头部
    $('body').prepend("<!--头部--><div class='header_search'></div>");
    $('.header_search').load('../base/helpbase.html .header_search_inner');

    $('body').prepend("<!--头部--><div class='header_top'></div>");
    $('.header_top').load('../base/helpbase.html .header_top');

    //底部
    $('body').append("<!--底部--><div class='partner_link'></div>");
    $('.partner_link').load('../base/helpbase.html .partner_link');
    $('body').append("<!--底部--><div class='footer'></div>");
    $('.footer').load('../base/helpbase.html .footer_nav_box ');
    $('body').append("<!--底部--><div class='copy_box'></div>");
    $('.copy_box').load('../base/helpbase.html .copy_box_inner');
});