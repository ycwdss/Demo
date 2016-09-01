/**
 * Created by 佳音 on 2015/9/25.
 */
define(['zepto','swiper','fhlib/new_totop'],function() {
    var mallCategoryItem = new Swiper('#mallCategoryItem', {
        direction: 'horizontal',
        loop: true,
        autoplay: 3000,
        onSlideChangeStart: function (swiper) {
            var indexA = $('.swiper-slide-active').attr('data-swiper-slide-index');
            $('.mall_Category_nav').find('li').removeClass();
            $('.mall_Category_nav').find('li').eq(indexA).addClass('current');
        }
    });
    var CategoryNav = $('#mallCategoryNav');
    $(CategoryNav).find('li').click(function () {
        var indexA = $(this).index();
        console.log(indexA);
        $(this).addClass('current');
        $(this).siblings().removeClass();
        mallCategoryItem.slideTo(indexA + 1);
        return false;
    });
});