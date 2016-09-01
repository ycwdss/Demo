
/**
 * Created by Administrator on 2015/10/28.
 */
define(['jquery','slick','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'],function() {
    $(function(){
    for(var i=0;i<$('.descri_container').size();i++){
        $('.descri_container').eq(i).find('.descri_ele').hide();
        $('.descri_container').eq(i).find('.descri_ele').eq(0).show();
    }
    var time;//Interval
    var delay=0;//延迟
   //用户动态翻页
        $('.user_prev').click(function(){
            if($('.user_page').size()>1) {
                $('.user_page').eq(0).animate({'margin-top': '-383px'}, 500, function () {
                    $('.user_show').append('<ul class="user_page">' + $('.user_page').eq(0).html() + '</ul>');
                            $('.user_page').eq(0).remove();
                });
            }
        });
        $('.user_next').click(function(){
            if($('.user_page').size()>1) {
                $('.user_show').prepend('<ul class="user_page">' + $('.user_page').eq($('.user_page').size()-1).html() + '</ul>');
                $('.user_page').eq(0).css('margin-top','-383px');
                $('.user_page').eq(0).animate({'margin-top': '0'}, 500, function () {
                    $('.user_page').eq($('.user_page').size()-1).remove();
                });
            }
        });
    //轮播
    $('.arrow_com').click(function(){
        if($(this).hasClass('prev')){
            var index= $.inArray(this,$('.prev'));
            var n=0;
            for(var i=0;i<$(this).siblings('.descri_ele').size();i++){
                if($('.prev').eq(index).siblings('.descri_ele').eq(i).css('display')!='none'){
                    n=i;
                }
            }
            if(n-1<0){
                n= $('.descri_container').eq(index).find('.descri_ele').size();
            }
            $('.descri_container').eq(index).find('.descri_ele').hide();
            $('.descri_container').eq(index).find('.descri_ele').eq(n-1).show();
        }
        else{
            var index= $.inArray(this,$('.next'));
            var s=0;
            for(var j=0;j<$(this).siblings('.descri_ele').size();j++){
                if($('.prev').eq(index).siblings('.descri_ele').eq(j).css('display')!='none'){
                    s=j;
                }
            }
            if(s+1==$('.descri_container').eq(index).find('.descri_ele').size()){
                s= -1;
            }
            $('.descri_container').eq(index).find('.descri_ele').hide();
            $('.descri_container').eq(index).find('.descri_ele').eq(s+1).show();
        }
    });
    //鼠标移入移出效果
    $('.yangban_ele').hover(function(){
        var n= $.inArray(this,$('.yangban_ele'));
        state=true;
        if(n<3){
            time=setInterval(function(){
                delay++;
                if(delay==3){
                    $('.yangban_ele').eq(n).removeClass('turn2').addClass('turn1');
                }
                if(delay==4){
                    $('.price_show').eq(n).hide();
                    $('.yangban_descri').eq(n).show();
                    delay=0;
                    clearInterval(time);
                }
            },100);
        }
    },function(){
        var n= $.inArray(this,$('.yangban_ele'));
        clearInterval(time);
        delay=0;
        var leave_time=0;
        if(n<3&&$('.yangban_ele').eq(n).hasClass('turn1')){
            $(this).removeClass('turn1').addClass('turn2');
            $('.yangban_descri').eq(n).hide();
            $('.price_show').eq(n).show();
        }
    });
    //$('.yangban_ele').hover(
    //    function(){
    //    var n= $.inArray(this, $('.yangban_ele'));
    //        time=setInterval(function(){
    //            delay++;
    //            if(delay==3){
    //                $('.yangban_descri').eq(n).animate({'top':'0'},400);
    //                delay=0;
    //                clearInterval(time);
    //            }
    //        },100);
    //        //$('.yangban_descri').eq(n).fadeIn(500);
    //    //$('.yangban_descri').eq(n).animate({'top':'0'},400);
    //},function(){
    //        clearInterval(time);
    //        delay=0;
    //    var n= $.inArray(this, $('.yangban_ele'));
    //    $('.yangban_descri').eq(n).stop(true,true);
    //        //$('.yangban_descri').eq(n).hide(400);
    //        //$('.yangban_descri').eq(n).fadeOut(500);
    //        $('.yangban_descri').eq(n).animate({'top':'500px'},400);
    });
});
