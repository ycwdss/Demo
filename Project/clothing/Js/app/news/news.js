/**
 * Created by wangzan on 2016/3/2.
 */
define(['jquery','module/base'], function () {
    $(document).ready(function () {
        //显示省略号
        $('.list_body  span').each(function () {
            if($(this).text().length>150){
                $(this).text($(this).text().substring(0,150));
                $(this).html($(this).html()+'...');
            }
        });
    });
})  