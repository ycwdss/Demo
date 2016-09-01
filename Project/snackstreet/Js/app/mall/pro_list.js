/**
 * Created by Administrator on 2016/1/25.
 */
define(['jquery','totop','qrcode','module/qrcode'],function(){
    $(function(){
        //加入购物车
        $('.shops_price .iconfont').click(function(){
            $('.success').show();
        });
        $('.continue_buy,.success_close').click(function(){
            $('.success').hide();
        });
    })
})