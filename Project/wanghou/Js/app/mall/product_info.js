/**
 * Created by wangzan on 2016/1/10.
 */
define(['jquery','slick','totop','magnifying'], function () {

$(document).ready(function () {
   $('.to_cart').click(function () {
       //倒计时
       var time=120;
       setInterval(function () {
        if(time == 0){
            $('.join_cart').hide();
        }else {
            time--;
            $('.join_title .tip3 em').text(time);
        }
       },1000);
       //点击显示
       $('.join_cart').show();
       popup();
       return false;
   });
    //弹出加入购物车
    function popup(){
        $('.recommend_inner').slick({
            dots:false,
            arrows:true,
            infinite: true,
            draggable:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed:500,
            prevArrow:'.l_btn',
            nextArrow:'.r_btn'
        });
    }
    $('.icon_close ').click(function () {
        $('.join_cart').hide();
    });
    //商品详情选项卡
    $('.intro_hd li a').click(function () {
        $(this).addClass('main').parent().siblings().children().removeClass('main');
        var $index=$(this).parent().index();
        $('.intro_bd').children().eq($index).show().siblings().hide();
        return false;
    });
    //大图切换
    $('.small_inner').slick({
        dots:false,
        arrows:true,
        infinite: true,
        draggable:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed:500,
        autoplay: false,
        prevArrow:'.left_btn',
        nextArrow:'.right_btn'
    });

    $('.small_show ').find('img').hover(function () {

        var imgSrc = $(this).attr('src');
        var imgBigImg = $(this).attr('big-img');
        $('.big_show img').attr({
            "src": imgSrc,
            "origin-src": imgSrc,
            "big-img": imgBigImg
        });
    });
    //图片放大
    $('.big_show').magnify({
        magnifierSize: [600, 600],  //定义放大的显示区域大小
        multiple: 3,                          //放大倍数
        cursorShadeClass: '',        //给过滤镜添加自定义类,有些属性需要加important覆盖
        magnifierClass: 'magnifier'          //给放大显示区域添加自定义类
    });
        
    //领取优惠券
    $('.discount_ticket ').click(function () {
        $('.pro_ticket ').slideDown('1000');
    });
    //预览小图hover边框
    $('.small_inner .co').hover(function () {
        $(this).addClass('main_border').siblings().removeClass('main_border');
    });
});
});