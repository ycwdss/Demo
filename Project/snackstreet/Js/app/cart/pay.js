/**
 * Created by Administrator on 2016/1/21.
 */
define(['jquery','totop','qrcode','module/qrcode'],function(){
    $(function(){
        //订单详情
        $('.order_detail a').click(function(){
            $('.order_list').slideToggle();
        });
        //微信支付
        $('.weixin').click(function(){
            $('.weixin_pay').show();

        });
        $('.weixin_pay .iconfont').click(function () {
            $('.weixin_pay').hide();
        });
        //银行支付
        $('.bank').click(function () {
            $('.bank_pay').show();
        });
        $('.finish_btn,.bank_pay .iconfont').click(function(){
            $('.bank_pay').hide();
        });
    })
})