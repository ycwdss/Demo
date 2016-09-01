/**
 * Created by Administrator on 2015/9/21.
 */
/**
 * Created by Administrator on 2015/9/14.
 */
define(['jquery','slick','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'],function(){
    $(function(){
        var status=0;
        $('.slick').slick({
            autoplay:false,
            slidesToShow:1,
            prevArrow:'.big_left',
            nextArrow:'.big_right',
            infinite:false,
            asNavFor:'.slick_nav',
            fade:true,
            speed:100
        });
        $('.slick_nav').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            prevArrow:'.small_left',
            nextArrow:'.small_right',
            infinite:false,
            asNavFor: '.slick',
            focusOnSelect: true
        });
        $('.small_img').click(function(){
            status= $.inArray(this,$('.small_img'));
            $('.small_img img').removeClass('border_green');
            $('.small_img img').eq($.inArray(this,$('.small_img'))).addClass('border_green')
        });
        $('.big_com').click(function(){
            status=$('.slick').find('.slick-active').attr('data-slick-index');
            $('.small_img img').removeClass('border_green');
            $('.small_img img').eq(status).addClass('border_green');
        });
        $('.small_right').click(function(){
            var n=$('.slick').find('.slick-active').attr('data-slick-index');
            if(status==n){
                status=parseInt(n)+7>$('.big_img').size()-1?parseInt(n):parseInt(n)+7;
            }
            else{
                status=n;
            }
            $('.small_img img').removeClass('border_green');
            $('.small_img img').eq(status).addClass('border_green');
            status=n;
        });
        $('.small_left').click(function(){
            var n=$('.slick_nav').find('.slick-active').attr('data-slick-index');
            $('.small_img img').removeClass('border_green');
            $('.small_img img').eq(n).addClass('border_green');
        });
    });
});
