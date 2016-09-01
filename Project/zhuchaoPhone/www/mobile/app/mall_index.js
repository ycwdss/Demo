/**
 * Created by 佳音 on 2015/9/25.
 */
define(['zepto','swiper','fhlib/new_totop'],function(){
var banner = new Swiper ('#banner', {
    direction: 'horizontal',
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
});
var mallSale = new Swiper('#mallSale', {
    slidesPerView : 3,
    spaceBetween : 0,
    autoplay : 3000,
});
var hotBrand = new Swiper('#hotBrand', {
    slidesPerView : 1,
    spaceBetween : 0,
    autoplay : 3000,
});
});
