/**
 * Created by wangzan on 2015/11/25.
 */
define(['jquery','slick'],function(){
    $(function(){
        $('.slick').slick({
            dots: true,
            arrows:true,
            prevArrow:'.prev',
            nextArrow:'.next',
            //autoplay:true,
            //autoplaySpeed:1000,
            easing:'linear',
            fade:true,
            dotsClass:'btn_dots'
        });

    });
})