/**
 * Created by Administrator on 2015/10/26.
 */

/**
 * Created by Administrator on 2015/10/26.
 */
define(['jquery','slick','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'],function() {
    $(function(){
        $('.more_hot').slick({
            slidesToShow:1,
            slidesToScroll:1,
            dots:false,
            prevArrow:'.more_prev1',
            nextArrow:'.more_next1',
            infinite:true
        });
            $('.more_history').slick({
                slidesToShow:1,
                slidesToScroll:1,
                dots:false,
                prevArrow:'.more_prev2',
                nextArrow:'.more_next2',
                infinite:true
            })
    });
});
