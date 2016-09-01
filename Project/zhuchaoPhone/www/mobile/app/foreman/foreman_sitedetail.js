/**
 * Created by Administrator on 2015/11/9.
 */
define(['zepto','swiper','fhlib/new_totop'],function() {
    var site_img = new Swiper('.c_site_img', {
        loop: true,
        onSlideChangeEnd: function(swiper){
            var n=$('.swiper-slide-active').attr('data-swiper-slide-index');
            $('.site_img_title span').removeClass('current');
            $('.site_img_title span').eq(n).addClass('current');
        }
    });
    $('.site_img_title span').click(function(){
        var n= $.inArray(this,$('.site_img_title span'));
        site_img.slideTo(n,500,false);
        $('.site_img_title span').removeClass('current');
        $('.site_img_title span').eq(n).addClass('current');
    })
    $('.textarea').keyup(function(){
        $('.detail_bottom i').html(Math.max(0,100-$(this).val().length));
    })
});