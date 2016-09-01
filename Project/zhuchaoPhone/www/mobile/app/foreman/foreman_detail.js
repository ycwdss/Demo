/**
 * Created by 佳音 on 2015/11/7.
 */
/**
 * Created by 佳音 on 2015/9/28.
 */
define(['zepto','swiper','fhlib/new_totop'],function() {
    var fangAn = new Swiper('#case', {
        direction: 'horizontal',
        loop: false,
        ChangeCasePage: function () {
            var $i = $('.new_case_page').find('i');
            $i.html(mySwiper.activeIndex + 1 + '/' + $i.attr('total'));
        }

    });
});