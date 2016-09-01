/**
 * Created by wangzan on 2015/12/25.
 */
define(['jquery','model/totop'], function () {
    $(document).ready(function(){
        $('.item li').click(function () {
            $(this).addClass('current').siblings().removeClass('current');
            $('.job_detail .list').eq($(this).index()).addClass('active').siblings().removeClass('active');
        });
        //改变颜色
        var whiteDiv = ['hd'];
        var whiterRange = new Array();
        for(var i = 0;i<whiteDiv.length;i++){
            var $div = $('.' + whiteDiv[i]);
            whiterRange.push([
                $($div).position().top,
                $($div).position().top+$($div).height()
            ])
        }

        $(window).scroll(function(){
            var color = getColor();
        });

        function getColor(){
            var scrollTop = $(window).scrollTop();
            for(var i = 0;i<whiterRange.length;i++){
                if(scrollTop>=whiterRange[i][0] && scrollTop<whiterRange[i][1]){
                    $('.header').removeClass('header_black').addClass('header_white');
                    return false;
                }
            }
            $('.header').removeClass('header_white').addClass('header_black');

        }

    });
})