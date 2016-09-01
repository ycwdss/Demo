/**
 * Created by wangzan on 2016/2/27.
 */
define(['jquery','slick'], function () {
    $(document).ready(function () {
        $('.recommend_box').slick({
            slidesToShow:5,
            slidesToScroll:2,
            arrows:true,
            dots:false,
            draggable: false,
            speed: 500,
            prevArrow:'.prev_btn',
            nextArrow:'.next_btn',
            autoplay: true
        })
    });
})