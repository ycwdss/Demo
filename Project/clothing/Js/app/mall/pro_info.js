/**
 * Created by jiayin on 2016/2/15.
 */
define(['jquery','slick','cloudzoom','magnifying','module/base'], function () {
    $(document).ready(function () {
        ////图片放大
        $('.img_small_inner').slick({
            arrows: true,
            infinite: true,
            prevArrow: '.left_btn',
            nextArrow: '.right_btn',
            easing: 'linear',
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            draggable: false
        });

        //CloudZoom.quickStart();

        $('.img_small img').hover(function () {
            var imgSrc = $(this).attr('src');
            var imgBigImg = $(this).attr('big-img');
            $('.img_big img').attr({
                "src": imgSrc,
                "origin-src": imgBigImg,
                "big-img": imgBigImg
            });
            $(this).parent('.same').addClass('main_border').siblings().removeClass('main_border');
        });

        //图片放大
        $('.img_big').magnify({
            magnifierSize: [500, 500],  //定义放大的显示区域大小
            multiple: 3,                          //放大倍数
            cursorShadeClass: '',        //给过滤镜添加自定义类,有些属性需要加important覆盖
            magnifierClass: 'magnifier'            //给放大显示区域添加自定义类
        });
        $(".recent_box  ").slick(
            {  
                autoplay: true,
                speed: 500,
                fade: false,
                slidesToShow:5,
                slidesToScroll:2,
                autoplaySpeed: 3000,
                arrows: true,
                prevArrow: '.prev_btn',
                nextArrow: '.next_btn',
                dots: false,
            });
    });

});