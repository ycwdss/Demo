/**
 * Created by Administrator on 2015/11/12.
 */
define(['zepto'],function () {
    $(function(){
        $.message_confirm=function(options){
            if(!options){
                options=new Object();
            }
            var defaults={
                text: '提示信息',//提示信息
                callback:function(){}
            };
            var options= $.extend(defaults,options);
            var textHtml='<div class="message_confirm_bg" id="message_confirm_bg">'+
                '<div class="message_confirm">'+
                    '<h4>'+options.text+'</h4>'+
                    '<div class="message_button clearfix">'+
                        '<span class="message_del" id="message_del">删除</span>'+
                        '<span class="message_sure" id="message_sure">确定</span>'+
                    '</div>'+
                '</div>'+
                '</div>';
            if($('#message_confirm_bg').length>0){
                $('#message_confirm_bg').remove();
            }
            $('body').append(textHtml);
            $('#message_confirm_bg').fadeIn(300);
            $('#message_sure').click(function(){
                options.callback();
                $('#message_confirm_bg').fadeOut(100);
            });
            $('.message_del').click(function(){
                $('#message_confirm_bg').fadeOut(100);
            })
        }
    });
});