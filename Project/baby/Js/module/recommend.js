/**
 * Created by wangzan on 2016/2/27.
 */
define(['jquery', 'slick'], function () {
    $(document).ready(function () {
        $('.hr_box').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            draggable: false,
            speed: 500,
            prevArrow: '.prev_btn',
            nextArrow: '.next_btn',
            autoplay: true
        })
        $('.hr_title a').click(function () {
            $(this).addClass('main_bg').siblings().removeClass('main_bg');
            $('.hr_content').children().eq($(this).index()).show().siblings().hide();
            return false;
        });
    });
})