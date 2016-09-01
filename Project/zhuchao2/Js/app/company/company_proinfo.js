/**
 * Created by wangzan on 2016/3/14.
 */
define(['jquery','slick','module/totop'],function(){
    $(function(){
        $('.classify_list h2').click(function () {
            if($(this).hasClass('active')){
                $(this).find('i').addClass('icon-black-right').removeClass('icon-black-down');
                $(this).next().hide();
                $(this).removeClass('active');
            }else {
                $(this).find('i').removeClass('icon-black-right').addClass('icon-black-down');
                $(this).next().show();
                $(this).addClass('active');
            }
        });
        $('.show_small').slick({
            speed: 500,
            slidesToShow: 5,
            slidesToScroll:1,
            arrows: true,
            dots: false,
            draggable: false,
            infinite:true,
            prevArrow:'.prev_btn',
            nextArrow:'.next_btn',
        });

        $('.show_small img').hover(function () {
            var imgSrc = $(this).attr('src');
            $('.show_big img').attr({
                "src": imgSrc,
            });
            $(this).parent('div').addClass('main_border').siblings().removeClass('main_border');
        });
        $('.describe_title a').click(function () {
            $(this).addClass('main_border').siblings().removeClass('main_border');
            $('.describle_info').children().eq($(this).index()).show().siblings().hide();
            return false;
        });
        $('.next_btn').click(function () {
            $('.slick-active').each(function (i,ele) {
                $(ele).eq(i).addClass('main_border').siblings().removeClass('main_border');
            });
            var $src=$('.show_small ').find('.main_border img').attr('src');
            $('.show_big img').attr({
                "src": $src,
            });

        });
        $('.prev_btn').click(function () {
            $('.slick-active').each(function (i,ele) {
                $(ele).eq(i).addClass('main_border').siblings().removeClass('main_border');
            });
            var $src=$('.show_small ').find('.main_border img').attr('src');
            $('.show_big img').attr({
                "src": $src,
            });

        });

        $('.company_erweima').find('.contact').hover(function () {
            $(this).find('.icon-lianxiwomen , .contact_us').hide().end().find('.contact_tel').show();
        },function () {
            $(this).find('.icon-lianxiwomen , .contact_us').show().end().find('.contact_tel').hide();
        });
    })
})