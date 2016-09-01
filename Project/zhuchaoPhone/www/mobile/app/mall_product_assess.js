/**
 * Created by 佳音 on 2015/9/25.
 */
define(['zepto','swiper','fhlib/new_totop'],function() {
    var pingjiaItem = new Swiper('#pingjiaItem', {
        direction: 'horizontal',
        loop: true,
        onSlideChangeEnd: function (swiper) {
            var indexA = $('.swiper-slide-active').attr('data-swiper-slide-index');
            $('.goods_pingjia_nav').find('li').removeClass();
            $('.goods_pingjia_nav').find('li').eq(indexA).addClass('current');
        }
    });
    var pingjiaNav = $('#pingjiaNav');
    $(pingjiaNav).find('li').click(function () {
        var indexA = $(this).index();
        console.log(indexA);
        $('.goods_pingjia_nav').find('li').removeClass();
        $('.goods_pingjia_nav').find('li').eq(indexA).addClass('current');
        pingjiaItem.slideTo(indexA + 1);
        return false;
    });
});
