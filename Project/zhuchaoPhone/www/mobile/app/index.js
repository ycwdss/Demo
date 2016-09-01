/**
 * Created by 佳音 on 2015/9/23.
 */
define(['zepto','swiper','fhlib/new_totop'],function(){
var banner = new Swiper ('#banner', {
    direction: 'horizontal',
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination'
});
var hotBrand = new Swiper ('#hotBrand', {
    direction: 'horizontal',
    loop: false
});

var zhishu = new Swiper('#zhishu',{
    scrollbar:'#zhishuScrollBar',
    scrollbarHide:false
});
var currentnav = $('#index_num_nav');
$(currentnav).find('li').click(function () {
    var indexA = $(this).index();
    zhishu.slideTo(indexA);
    return false;
});

    $('#footer_nav3').tap(function(){
        var time=null;
        if($('.footer_menu').hasClass('hide')){
            clearTimeout(time);
            $('.footer_menu').removeClass('bounceOut');
            $('.footer_menu').removeClass('hide').addClass('bounceIn');
        }
       else{
            $('.footer_menu').removeClass('bounceIn');
            $('.footer_menu').addClass('bounceOut');
            time = setTimeout(function(){
                $('.footer_menu').addClass('hide');
            },1000);
        }
    });

    $('.icon_delete').tap(function(){
        $('.footer_menu').addClass('hide').removeClass('bounceIn');
        //$('html').css('position','static');
    })
});