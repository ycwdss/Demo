
/**
 * Created by wangzan on 2015/12/9.
 */
define(['../jquery'],function(){

    $(document).ready(function () {
       $(window).scroll(function () {
           if($(document).scrollTop()>=300){
            $('.totop').show();
           }else{
               $('.totop').hide();
           }
       });
    });

});