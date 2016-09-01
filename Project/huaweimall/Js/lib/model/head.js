/**
 * Created by wangzan on 2015/12/9.
 */
define(['../jquery'],function(){

    $(document).ready(function () {
        $('.search_form .text').focus(function () {
            $('.holder').hide();
        });
        $('.search_form .text').blur(function () {
            $('.holder').show();
        });
        //二维码
        $('.erweima .dots li').hover(function () {
            var index=$(this).index();
            $(this).addClass('current').siblings().removeClass('current');
            $('.erweima_img a').eq(index).fadeOut(500).siblings().fadeIn(500);
        })
    })

});