/**
 * Created by Administrator on 2016/1/14.
 */
define(['jquery'],function(){
   $(function(){
       $('.user_img span').click(function(){
            $('.l_head_img').show();
       });
       $('.close_btn,.cancel_btn').click(function(){
           $('.l_head_img').hide();
       });
       $('.upload_btn').click(function(){
           $('upload_btn').find('input').trigger('click');
       })
   })
});