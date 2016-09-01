/**
 * Created by Administrator on 2016/1/13.
 */
define(['jquery'],function(){
   $(function(){
        $('.defult_btn').click(function(){
            $('.right_logo').removeClass('main');
            for(var i = 0;i<$('.right_logo').length;i++){
                if($('.right_logo').eq(i).parent().find('.defult_btn').hasClass('hide')){
                    $('.right_logo').eq(i).parent().find('.defult_btn').removeClass('hide')
                }
            }
            $(this).addClass('hide');
            $(this).parents('.address_ele').find('.right_logo').addClass('main');
        });
       $('.submit_address ').click(function(){
           var status = false;
           if($('.recevier').find('input').val() == ""){
               $('.tip').eq(0).removeClass('hide');
               status=true;
           }
           if($('.new_address_detail').find('input').val() == ""){
               $('.tip').eq(1).removeClass('hide');
               status=true;
           }
           if($('.new_address_phone').find('input').val() == ""){
               $('.tip').eq(2).removeClass('hide');
               status=true;
           }
           if(status){
               return false;
           }
       })

   })
});