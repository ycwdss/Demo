/**
 * Created by jiayin on 2016/1/31.
 */
define(['jquery','slick','module/totop','module/base'], function () {
    $(document).ready(function () {
        /*
        * banner  slick
        * */
        $('.banner').slick({
            autoplay: true,
            autoplaySpeed:2000,
            speed:500,
            pauseOnHover:false,
            dots:true,
            dotsClass:'banner_dots',
            arrows:false,
            infinite: true,
            fade:true,
        });
        $('.banner_dots li').hover(function(){
            var index = $.inArray(this,$('.banner_dots li')) ;
            $('.banner').slick("slickGoTo",index);
        });
        /*
        * 热卖商品
        *
        * */
        $('.hot_slick').slick({
            slidesToShow:4,
            slidesToScroll:1,
        });
        /*
        * 楼层 轮播*/
        $('.floor_slick').slick({
            autoplay: true,
            autoplaySpeed:2000,
            speed:500,
            dots:true,
            dotsClass:'banner_dots',
            arrows:false,
            infinite: true,
        })
    });

});