/**
 * Created by Administrator on 2016/1/15.
 */
define(['jquery'],function(){
   $(function(){
       $('.select_btn>span').click(function(e){
           if(  $(this).siblings('ul').is(':visible')){
               $(this).siblings('ul').slideUp(100);
           }else{
               $(this).siblings('ul').slideDown(100);
               e.stopPropagation();
           }
       });
       $('.select_btn >ul li').click(function(e){
           $(this).parents('.select_btn').find('span').html($(this).html());
       });
       $('html,body').click(function(){
           $('.select_btn>ul').slideUp(100);
       })
   })
});