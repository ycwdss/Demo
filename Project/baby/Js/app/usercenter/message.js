/**
 * Created by Administrator on 2016/2/18.
 */
define(['jquery','module/totop','module/recommend','module/base'], function () {
    $(document).ready(function () {
            $('.msg_info span').each(function () {
                if($(this).text().length>150){
                    $(this).text($(this).text().substring(0,150));
                    $(this).html($(this).html()+'...');
                }
            });
    });
});