/**
 * Created by Administrator on 2016/1/4.
 */
define(['zepto','module/totop'],function(){
   $('.button').click(function(){
       if(!$(this).hasClass('active_bg')){
           $('.button').removeClass('active_bg');
           $(this).addClass('active_bg');
       }
   });
    $('.address_state').click(function(){
        if(!$(this).hasClass('active')){
            $('.address_state i').removeClass('active');
            $(this).find('i').addClass('active');
        }
    });
    $('.address_del').click(function(){
        var n = $.inArray(this,$('.address_del'));
        $('.m_address').eq(n).remove();
    })
});