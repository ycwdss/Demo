/**
 * Created by jiayin on 2016/1/27.
 */
define(['zepto','module/totop','module/nav_show'],function(){
    $(function(){
       $('.new_nav li').tap(function(){
           var indexA=$(this).index();
           $(this).addClass('current').siblings().removeClass('current');
           $('.new_center .content_item').hide().eq(indexA).show();
       })

    })
});