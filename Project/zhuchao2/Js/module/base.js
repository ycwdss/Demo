/**
 * Created by wangzan on 2016/3/10.
 */
define(['jquery'], function () {
   //头部
    $('body').prepend("<!--头部--><div class='nav main_bg_light main_border'></div>");
    $('.nav').load('../base/base.html .nav_inner');

    $('body').prepend("<!--头部--><div class='header_search'></div>");
    $('.header_search').load('../base/base.html .header_search_inner');

    $('body').prepend("<!--头部--><div class='header_top'></div>");
    $('.header_top').load('../base/base.html .header_top_inner');
});