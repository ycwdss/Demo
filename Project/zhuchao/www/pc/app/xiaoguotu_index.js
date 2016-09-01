define(['jquery','slick','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'], function () {
$(function(){
    $('.slick').slick({
        autoplay:true,
        speed:100,
        slidesToShow:1,
        slidesToScroll:1,
        fade:true,
        arrows:false,
        dots:true,
        dotsClass:"dots"
    });
    $('.hot_lis_text').hover(function(){
        var n= $.inArray(this,$('.hot_lis_text'));
        $('.hot_lis_img').removeClass('img_show');
        $('.hot_lis_img').eq(n).addClass('img_show');
        $('.hot_lis_text').removeClass('text_hover');
        $('.hot_lis_text').eq(n).addClass('text_hover');
        if(n==6){
            $('.text_hover').css('border-bottom','1px solid #f8f8f8');
        }
    });
    var delay=0;
    var time=null;
    $('.m_part img').parent('a').hover(function(){

        var index=$.inArray(this, $('.m_part img').parent('a'));
        time=setInterval(function(){
            delay+=1;
            if(delay>2){
                delay=0;
                clearInterval(time);
                $('.store').eq(index).animate({width:'54px'},200);
            }
        },100);
    },function(){
        delay=0;
        clearInterval(time);
        $('.store').eq($.inArray(this, $('.m_part img').parent('a'))).animate({width:'0'},200);
    });
});
});