/**
 * Created by wangzan on 2016/4/1.
 */
define(['zepto','module/company_classify','swiper','module/totop'],function() {
    $(function () {
        //广告
        var $len=$('.swiper-slide').length;

        var swiper = new Swiper('.swiper-container',{
            //pagination : '.swiper-pagination',
           // autoplay : 3000,
            // speed:300,
            loop:true,

            onSlideChangeStart: function (swiper) {
                var $num=parseInt($('.swiper-slide-active').attr('data-swiper-slide-mall'))+1;
                $('.case_num em').html($num);
                $('.case_num span').html($len);
            }
        });



    });
})