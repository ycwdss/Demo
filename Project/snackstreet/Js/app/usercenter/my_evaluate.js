/**
 * Created by Administrator on 2016/1/21.
 */
define(['jquery','qrcode','module/qrcode'],function(){
    $(function(){
        $('.content_title a').click(function(){
            var n = $.inArray(this, $('.content_title a'));
            if(!$(this).hasClass('main')){
                $(this).siblings().removeClass('main');
                $(this).addClass('main');
               if(n == 0){
                   $('.evaluate_wrap').show();
                   $('.order_wrap').hide();
               }else{
                   $('.evaluate_wrap').hide();
                   $('.order_wrap').show();
               }
            }
        })
    })
})