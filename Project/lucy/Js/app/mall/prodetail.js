/**
 * Created by jiayin on 2016/1/20.
 */
define(['jquery', 'slick', 'layer', 'module/magnifying', 'module/base'], function () {
    $(function () {
        //小图切换
        $("#proImgTab").slick(
            {
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                prevArrow: '.prev',
                nextArrow: '.next'
            });
        $('#proImgTab').find('.small_tab_list img').click(function () {
            var imgSrc = $(this).attr('src');
            var imgBigImg = $(this).attr('big-img');
            $(this).parent().addClass('current').siblings().removeClass('current');
            $('.magnifier_wrapper img').attr({
                "src": imgSrc,
                "origin-src": imgSrc,
                "big-img": imgBigImg
            });

        });
        //图片放大
        $('.magnifier_wrapper').magnify({
            magnifierSize: [500, 500],  //定义放大的显示区域大小
            multiple: 2,                          //放大倍数
            cursorShadeClass: '',        //给过滤镜添加自定义类,有些属性需要加important覆盖
            magnifierClass: 'magnifier',            //给放大显示区域添加自定义类
            loazyloadImg: '../../Images/icon/loading-0.gif' //延迟加载图标url
        });

        //优惠
        $('.get_coupon').click(function () {
            if ($(this).find('.sanjiao').hasClass('current')) {
                $(this).find('.sanjiao').removeClass('current');
                $('.coupon_lsit_box').hide();
            }
            else {
                $(this).find('.sanjiao').addClass('current');
                $('.coupon_lsit_box').show();
            }
        });
        //点击领取
        $('.coupon_lsit .small_btn').click(function () {
            $(this).parent('div').addClass('clicked');
            $(this).text('已领取');
            $('.get_coupon').find('.sanjiao').removeClass('current');
            $('.coupon_lsit_box').hide();
            layer.msg('已领取', {
                time: 1000 //1秒关闭（如果不配置，默认是3秒）
            });
        });
        //切换产品介绍
        $('#proInfoNav li').click(function () {
            var indexA = $(this).index();
            if ($(this).hasClass('bgfff')) {
                $(this).siblings().removeClass('bgfff main_border main');
                $(this).addClass('main_border_hover main_hover');
                $('.pro_info_box .pro_info_list').hide();
                $('.pro_info_box .pro_info_list').eq(indexA).show();
            }
            else {
                $(this).siblings().removeClass('bgfff main_border main');
                $(this).addClass('bgfff main_border main');
                $('.pro_info_box .pro_info_list').hide();
                $('.pro_info_box .pro_info_list').eq(indexA).show();
            }
        })
    })
})
;