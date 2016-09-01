/**
 * Created by Administrator on 2015/10/10.
 */
define(['jquery','fhlib/search','fhlib/totop','slick',
    'lazyload','fhlib/imglazy','fhlib/navselect','fhlib/list'],function() {
    $('.recommend_content').slick({
        slidesToShow:5,
        slidesToScroll:5,
        dots:false,
        prevArrow:'.recom_arrow1',
        nextArrow:'.recom_arrow2',
        infinite:false
    });
    $('.recom_count span').eq(1).html((Math.ceil($('.recom_ele').length/5)));
    $('.recom_arrow').click(function(){
        var m=$('.recom_count span').eq(0);
        if($(this).hasClass('recom_arrow1')){
            m.html(Math.max(1, m.html()-1))
        }
        else{
            m.html(Math.min($('.recom_count span').eq(1).html(), m.html()+1))
        }
    });
});