
/**
 * Created by wangzan on 2015/12/13.
 */
define(['jquery','../model/head','../model/totop'],function(){

    $(document).ready(function () {
        //==============支付页topay===============
        $('.order_confirm .hs a').toggle(function () {
            $('.order_confirm .bd').slideDown();
            $(this).children('.arrow').addClass('current');
        }, function () {
            $('.order_confirm .bd').slideUp();
            $(this).children('.arrow').removeClass('current');
        });
    });
});
