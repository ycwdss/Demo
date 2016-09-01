/**
 * Created by Administrator on 2015/11/10.
 */
define(['zepto'],function () {
    $(function(){
        $.message_right=function(){
            var textHtml='<div class="message_right_bg hide" id="message_right_bg"><div class="message_right"> <div class="message_img"></div> <p>恭喜，已加入购物车</p> </div> </div>';
            if($('#message_right_bg').length>0){
                $('#message_right_bg').remove();
            }
            $('body').append(textHtml);
            $('#message_right_bg').fadeIn(300);
             setTimeout(function(){
                $('#message_right_bg').fadeOut(300);
             },1000);
    }
});
});