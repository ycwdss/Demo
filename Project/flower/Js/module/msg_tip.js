/**
 * Created by Administrator on 2016/2/22.
 */
define(['jquery'],function(){
    ;$(function(){
        $.fn.tip = function(options){
            var settings = {
                'top': '50px',
                'left': '-65px',
                'arrow_left':'110px'
            } ;
            return this.each(function(){
                var _this = $(this);
                if(options){
                    $.extend(settings,options);
                }
                $('.msg_tip').css({'top':settings.top,'left':settings.left});
                $('.msg_tip_arrow').css({'left':settings.arrow_left});
                _this.click(function(e){
                    if($(this).siblings('.msg_tip').hasClass('hide')){
                        $('.msg_tip').hide();
                        $(this).siblings('.msg_tip').show();
                    }
                    e.stopPropagation();
                });
                $('html,body').click(function(){
                        $('.msg_tip').hide();
                    }
                )
            })
        }
    })
});