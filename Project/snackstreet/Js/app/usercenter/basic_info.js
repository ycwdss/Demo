/**
 * Created by wangzan on 2016/1/18.
 */
define(['jquery','totop','qrcode','module/qrcode'], function () {
    $(document).ready(function () {
            $('.content_title a').click(function () {
               $(this).addClass('main').siblings().removeClass('main');
                $('.info_box').children().eq($(this).index()).show().siblings().hide();
            });
    });
});