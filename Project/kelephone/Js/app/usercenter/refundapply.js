/**
 * Created by jiayin on 2016/1/15.
 */
define(['zepto'],function() {
    $(function(){
        $('.list_check_box a').tap(function(){
            $(this).addClass('current').siblings().removeClass('current');
        })
    })
});