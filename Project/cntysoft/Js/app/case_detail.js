/**
 * Created by Administrator on 2015/12/28.
 */
define(['jquery','zoomPic','model/totop'],function(){
    $(function(){
        new ZoomPic("focus_Box1");
         reset();
        $(window).resize(function(){
           reset();
        });
        function reset(){
            $('.search_intro3_bottom').css('border-left-width',$('.search').width()+'px');
            $('.search_intro3_bottom').css('border-top-width',$('.search').width()/3.5+'px');
            $('.pc_top_bg').css('border-bottom-width',$('.search').width()/3.5+'px');
            $('.pc_top_bg').css('border-right-width',$('.search').width()+'px');
            $('.phone_describe_bg').css('border-bottom-width',$('.search').width()/3.5+'px');
            $('.phone_describe_bg').css('border-left-width',$('.search').width()+'px');
            $('.intro3_img1').css('top',60*$('.search').width()/1920+'px');
            $('.intro3_img2').css('top',177*$('.search').width()/1920+'px');
            $('.intro3_img3').css('top',303*$('.search').width()/1920+'px');
            $('.intro3_process1').css('top',(95+350*$('.search').width()/1920)+'px');
            $('.intro3_process2').css('top',(220+470*$('.search').width()/1920)+'px');
            $('.intro3_process3').css('top',(160+550*$('.search').width()/1920)+'px');
            $('.arrow_blue1').css('top',(80+440*$('.search').width()/1920)+'px');
            $('.arrow_blue2').css('top',(285+450*$('.search').width()/1920)+'px');
        }
    })
});
