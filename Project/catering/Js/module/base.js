/**
 * Created by wangzan on 2016/2/23.
 */
define(['jquery'], function () {
    //头部底部
    $(function(){
        $('body').prepend("<!--头部--><div class='header'></div>");
        $('.header').load('../base/base.html .header_box')

        $('body').append("<!--底部--><div class='footer'></div>");
        $('.footer').load('../base/base.html .footer_box')
    });

});