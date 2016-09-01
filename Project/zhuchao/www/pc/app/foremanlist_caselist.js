/**
 * Created by Administrator on 2015/10/9.
 */
define(['jquery','fhlib/search','fhlib/totop','slick',
    'lazyload','fhlib/imglazy','fhlib/navselect','fhlib/list'],function() {
    for(var i=0;i<$('.case_ele').length;i++){
        $('.case_img').eq(i).addClass('case_img'+i);
        $('.case_ele').eq(i).find('.arrow_prev').addClass('arrow_prev'+i);
        $('.case_ele').eq(i).find('.arrow_next').addClass('arrow_next'+i);
    }
    for(var j=0;j<$('.case_ele').length;j++){
        var n='.arrow_prev'+j;
        var m='.arrow_next'+j;
        $('.case_img'+j).slick({
            slidesToShow:1,
            slidesToScroll:1,
            dots:false,
            prevArrow:n,
            nextArrow:m
        });
    }
    $('.arrow_com').hide();
    $('.img_container').hover(function(){
        $(this).find('.arrow_com').fadeIn(200);
    });
    $('.img_container').mouseleave(function(){
        $(this).find('.arrow_com').fadeOut(200);
    });
    //搜索工长列表页
    for(var k=0;k<2;k++){
        for(var l=2;l<$('.m_show').eq(k).find('.show_ele').length;l++){
            $('.m_show').eq(k).find('.show_ele').eq(l).hide();
        }
    }
    $('.show_case').click(function () {
        if(!$(this).find('.case_arrow').hasClass('arrow_up')){
            $(this).find('.case_arrow').addClass('arrow_up');
            $(this).find('span').eq(0).html('收起案例');
            $('.case').eq($.inArray(this,$('.show_case'))).show();
        }
        else{
            $(this).find('span').removeClass('arrow_up');
            $(this).find('span').eq(0).html('展开案例');
            $('.case').eq($.inArray(this,$('.show_case'))).hide();
        }
    });
    $('.more').click(function(){
        var n= $.inArray(this,$('.more'));
        if($(this).html().length>2){
            $(this).siblings('.show_ele').show();
            $(this).html("收起");
        }
        else{
            for(var s=2;s<$(this).siblings('.show_ele').length;s++) {
                $(this).siblings('.show_ele').eq(s).hide();
            }
            if(n>0){
                $(this).html('查看更多案例');
            }
            else{
                $(this).html("查看更多工长");
            }
        }

    })
});