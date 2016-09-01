
/**
 * Created by Administrator on 2015/10/26.
 */
define(['jquery','slick','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect','fhlib/mall_nav'],function() {
    $(function(){
        $('.more_container').slick({
            slidesToShow:1,
            slidesToScroll:1,
            dots:false,
            prevArrow:'.arrow_prev',
            nextArrow:'.arrow_next',
            infinite:true
        })
    });
});
