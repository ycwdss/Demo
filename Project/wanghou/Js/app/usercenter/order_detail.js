/**
 * Created by Administrator on 2016/1/11.
 */
define(['jquery'],function(){
    $(function(){
       $('.logistics_btn').click(function(){
          if($(this).html() == '[查看物流]'){
               $('.c_logistics').slideDown();
              $(this).html('[取消查看]');
           }else{
              $('.c_logistics').slideUp();
              $(this).html('[查看物流]');
          }

       })
    });
});