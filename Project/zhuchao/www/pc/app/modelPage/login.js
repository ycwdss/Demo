/**
 * Created by Administrator on 2015/11/5.
 */
define(['jquery'],function() {
    $(function () {
        var winHeight=$(window).height();
        var winWidth=$(window).width();
        $('.login_content').css({'top':Math.max((winHeight-400)/2,0)+'px','left':Math.max((winWidth-370)/2,0)+'px'});
        $(window).resize(function(){
             winHeight=$(window).height();
             winWidth=$(window).width();
            $('.login_content').css({'top':Math.max((winHeight-400)/2,0)+'px','left':Math.max((winWidth-370)/2,0)+'px'});
        });
    })
});