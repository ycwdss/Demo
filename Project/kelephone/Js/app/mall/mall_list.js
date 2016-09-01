/**
 * Created by jiayin on 2016/1/4.
 */
define(['zepto', 'swiper'], function () {
    //商品分类导航
    var mallListNav = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10
    });
    //导航点击状态
    $('#mallListNav').find('.nav_list:first-child').addClass('mainbordercolor maincolor');
    $('#mallListNav .nav_list').tap(function () {
        $(this).addClass('mainbordercolor maincolor').siblings().removeClass('mainbordercolor maincolor');

    })
});