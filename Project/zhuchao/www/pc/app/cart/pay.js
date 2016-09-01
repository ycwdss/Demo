define(['jquery','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'],function() {
    $(document).ready(function () {
        $('#orderDetail').click(function(){
            $('#orderList').slideToggle(400);
        });
        //打开二维码
        $('#ErWeiMa').click(function(){
            $('#payWeiXin').fadeIn(300);
        });
        //关闭二维码
        $('#payOffBtn').click(function(){
            $(this).parents('#payWeiXin').fadeOut(300);
        });
        //打开平台支付完成
        $('.payment_list>ul>li').not('#ErWeiMa').click(function(){
            $('#payFinish').fadeIn(300);
        });
        //关闭平台支付完成
        $('#payFinishBtn').click(function(){
            $(this).parents('#payFinish').fadeOut(300);
        });
    });
});

