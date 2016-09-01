/**
 * Created by Administrator on 2015/9/1.
 */
define(['jquery'],function(){
$(function(){
   $('.shop_bottom').hover(function(){
       $('.two_img').eq($.inArray(this,$('.shop_bottom'))).fadeIn(200);
   });
    $('.shop_bottom').mouseleave(function(){
        $('.two_img').eq($.inArray(this,$('.shop_bottom'))).fadeOut(200);
    })
});
});