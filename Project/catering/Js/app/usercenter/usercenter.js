/**
 * Created by Administrator on 2016/1/31.
 */
define(['jquery','slick','module/totop','module/drop'], function () {
    $(document).ready(function () {
    //特别推荐
        $('.recommend_items').slick({
            arrows: true,
            infinite: true,
            prevArrow: '.recommend_prev',
            nextArrow: '.recommend_next',
            easing: 'linear',
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: false
        });

    });
});