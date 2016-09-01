/**
 * Created by wangzan on 2015/12/18.
 */
define(['jquery','model/head','model/totop'],function(){

    $(document).ready(function () {
       $('.title ul li').click(function () {
           $(this).addClass('current').siblings().removeClass('current');
            $('.coupons_box').children().eq($(this).index()).show().siblings().hide();
       });
    });
});