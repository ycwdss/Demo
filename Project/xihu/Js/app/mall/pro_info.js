/**
 * Created by jiayin on 2016/2/15.
 */
define(['jquery', 'magnifying','module/recommend','module/base'], function () {
    $(document).ready(function () {
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
        //切换
        $('.ie_title').find('.title').click(function () {
            var parent=$(this).closest('.info_evaluate');
            $(this).addClass('main').siblings('.title').removeClass('main');
            if($(this).index()==0){
                parent.children().eq($(this).index()+1).show().siblings('.con').hide();
            } else {
                parent.children().eq($(this).index()).show().siblings('.con').hide();
            }
            return false;
        });

    });
});