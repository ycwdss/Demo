/**
 * Created by jiayin on 2015/12/24.
 */
define(['jquery','model/totop'], function () {
    $(function () {
        $('.left_content_title>h3').click(function(){
            $(this).addClass('current').siblings('h3').removeClass();
        });
        $('.left_content_title>span').click(function(){
            $(this).addClass('current').siblings('span').removeClass('current');
        })
    })
});