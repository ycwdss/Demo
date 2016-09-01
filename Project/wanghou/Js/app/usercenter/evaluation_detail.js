/**
 * Created by Administrator on 2016/1/12.
 */
define(['jquery'],function(){
   $(function(){
       $('.evaluation_star').click(function(){
           var index = $.inArray(this,$('.evaluation_star'));
           $('.evaluation_star').removeClass('main');
           $('.c_score').html((index+1)+'分');
           for(var i = 0;i<=index;i++){
               $('.evaluation_star').eq(i).addClass('main');
           }
       })
   })
});