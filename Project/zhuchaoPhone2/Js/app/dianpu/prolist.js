/**
 * Created by jiayin on 2016/4/7.
 */
define(['zepto', 'swiper','module/mall_nav','module/totop'], function () {
    //商品分类导航
    var mallListNav = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10
    });

    //导航点击状态
    $('#mallListNav').find('.nav_list:first-child').addClass('current');
    $('#mallListNav .nav_list').tap(function () {
        $(this).addClass('current').siblings().removeClass('current');

    })
});