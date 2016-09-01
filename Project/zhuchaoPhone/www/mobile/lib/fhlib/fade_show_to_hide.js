/**
 * Created by Administrator on 2015/11/10.
 */
define(['zepto'],function () {
    $(function(){
        $.fadeShow=function(){
        var textHtml='<div class="join_cart_bg hide"><div class="join_cart"> <div class="join_right"></div> <p>恭喜，已加入购物车</p> </div> </div>';
        $('body').append(textHtml);
        $('.join_cart_bg').fadeIn(500);
        setTimeout(function(){
            $('.join_cart_bg').fadeOut(300);
        },1000);
    }
});
});