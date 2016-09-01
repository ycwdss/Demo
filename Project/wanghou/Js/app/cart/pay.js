/**
 * Created by wangzan on 2016/1/12.
 */
define(['jquery','totop'], function () {
    $(document).ready(function () {
        $('.pay_way ul li a').not('.weixin_pay').click(function () {
           $('.mask').show();
            return false;
        });
        $('.mask .close,.weixin .close').click(function () {
            $('.mask').hide();
            $('.weixin').hide();
        });
        $('.third_pay .weixin_pay').click(function () {
            $('.weixin').show();
            $('.mask').hide();
            return false;
        });
    });
});