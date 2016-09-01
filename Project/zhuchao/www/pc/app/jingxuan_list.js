/**
 * Created by Administrator on 2015/9/16.
 */
define(['jquery','slick','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'], function () {
$(function(){
   $('.slick').slick({
       speed:1000,
       slidesToShow:1,
       slidesToScroll:1,
       prevArrow:'.left',
       nextArrow:'.right',
       fade:true,
       dots:true,
       dotsClass:"dots"
   });
});
});