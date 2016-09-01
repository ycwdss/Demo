/**
 * Created by Administrator on 2016/4/13.
 */
define(['jquery','slick'],function () {
    $(function () {
        $('.l_banner').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:3000,
            dots:true,
            arrows:false,
            dotsClass:'banner_dots'
        });
    })
})