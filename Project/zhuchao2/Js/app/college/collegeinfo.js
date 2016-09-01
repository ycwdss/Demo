/**
 * Created by jiayin on 2016/3/29.
 */
define(['jquery', 'qrcode', 'module/share'], function () {

    //手机二维码
    $(function () {
        jQuery('#weixin_code').qrcode({
            width: 200,
            height: 200,
            text: "http://shenen.net/"
        });
    })


});