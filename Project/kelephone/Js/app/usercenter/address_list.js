/**
 * Created by Administrator on 2016/1/4.
 */
define(['zepto','module/totop'],function(){
   $('.button').click(function(){
       if(!$(this).hasClass('mainbgcolor')){
           $('.button').removeClass('mainbgcolor');
           $(this).addClass('mainbgcolor');
       }
   });
    $('.address_state').click(function(){
        if(!$(this).hasClass('maincolor')){
            $('.address_state i').removeClass('maincolor');
            $(this).find('i').addClass('maincolor');
        }
    });
    $('.address_del').click(function(){
        var n = $.inArray(this,$('.address_del'));
        $('.m_address').eq(n).remove();
    })
});