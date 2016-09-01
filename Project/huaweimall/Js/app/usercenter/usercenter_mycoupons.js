/**
 * Created by wangzan on 2015/12/19.
 */
define(['jquery','model/head','model/totop'],function(){

    $(document).ready(function () {
        $('.title ul li').click(function () {
            $(this).addClass('current').siblings().removeClass('current');
            $('.exchange_box').children().eq($(this).index()).show().siblings().hide();
        });
    });
});