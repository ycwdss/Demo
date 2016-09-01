/**
 * Created by Administrator on 2016/2/19.
 */
define(['jquery','slick'],function(){
    $(function(){
        $('.recommend_slick').slick({
            slidesToShow:4,
            slidesToScroll:4,
            arrows:false,
            dots:true,
            dotsClass:'recommend_dots',
            draggable: false,
            speed: 500,
            autoplay: true
        })
    })
})