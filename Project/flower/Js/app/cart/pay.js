/**
 * Created by wangzan on 2016/1/12.
 */
define(['jquery','module/totop'], function () {
    $(document).ready(function () {
        $('.pay_way ul li a').not('.weixin_pay').click(function () {
           $('.mask').fadeIn(200);
            return false;
        });
        $('.mask .close,.weixin .close').click(function () {
            $('.mask').fadeOut(200);
            $('.weixin').fadeOut(200);
        });
        $('.third_pay .weixin_pay').click(function () {
            $('.weixin').fadeIn(200);
            $('.mask').fadeOut(200);
            return false;
        });
    });
});