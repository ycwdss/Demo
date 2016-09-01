/**
 * Created by jiayin on 2016/2/15.
 */
define(['jquery', 'slick','module/totop'], function () {
    $(document).ready(function () {
        //商品小图图片切换
        $('#proImgTab').slick({
            speed: 500,
            slidesToShow: 4,
            arrows: true,
            dots: false,
            draggable: false,
            prevArrow: '.prev',
            nextArrow: '.next',
            centerMode: 'true'
        });
        //点击小图图片列表改变商品图片
        $('.small_tab_list').click(function () {
            $('.small_tab_list').find('img').removeClass('main_border');
            $(this).find('img').addClass('main_border');
            var ImgAttr=$(this).find('img').attr('src');
            $('.pro_big_img').find('img').attr('src',ImgAttr);
        });
        //点击图片出现大图
        $('.pro_big_img_li').click(function () {
            var PopupImgAttr = $(this).find('img').attr('src');
            $('.popup_big_img').find('.slick-active img').attr('src', PopupImgAttr);
            $('.pro_img_popup').fadeIn(200);
            $('.popup_big_img').slick({
                dots: false,
                arrows: true,
                prevArrow: '.popup_prev',
                nextArrow: '.popup_next',
                easing: 'linear',
                fade: true
            });
            $('.icon-cuohao').click(function () {
                $('.pro_img_popup').fadeOut(200);
            })
        });
        //加
        $('.btn_add').click(function () {
            var $value = $(this).prev('input');
            $value.val(+$value.val() + 1);
            $('#proNum').keyup();
        });
        //减号
        $('.btn_minus').click(function () {
            var $value = $(this).next('input');
            $value.val($value.val() - 1);
            $('#proNum').keyup();
        });
        //数量改变
        $('#proNum').keyup(function () {
            var val = $(this).val();
            if (!$.isNumeric(val) || val < 1) {
                $(this).val(1);
            }
        });
        //切换商品介绍
        $('.pro_info_nav li').click(function () {
            var indexA = $(this).index();
            if ($(this).hasClass('main_bg')) {
                $(this).siblings().removeClass('main_bg');
                $(this).addClass('main_hover');
                $('.pro_content_detail .pro_content_list ').hide();
                $('.pro_content_detail .pro_content_list').eq(indexA).show();
            }
            else {
                $(this).siblings().removeClass('main_bg');
                $(this).addClass('main_bg');
                $('.pro_content_detail .pro_content_list').hide();
                $('.pro_content_detail .pro_content_list').eq(indexA).show();
            }
        });
        //固定导航出现
        $(window).scroll(function () {
            var fixedNav = $("#fixedNav");
            var top = $(window).scrollTop();
            if (top > 900) {
                fixedNav.removeClass('hide');
            }
            else {
                fixedNav.addClass('hide');
            }
        });
        $('#fixedNavMenu').find('li a').click(function () {
            var indexX = $(this).parent().index();
            $('.pro_info_nav li').removeClass('main_bg');
            $('.pro_info_nav li').eq(indexX).addClass('main_bg');
            $('.pro_content_detail .pro_content_list').hide();
            $('html,body').animate({
                scrollTop: $('.pro_content_list').eq(indexX).show().offset().top - 120
            }, 800);
            return false;
        });

        //成功加入购物车
        $('.add_cart').click(function () {
            $('.success_cart').fadeIn(200);
            return false;
        });
        $('.close').click(function () {
            $('.popup_box').fadeOut(200);
        });
        //规格选择
        $('.spec_box ul li').click(function(){
            $(this).addClass('main_bg main_border').siblings().removeClass('main_bg main_border');
        })

    });
    //分享
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "0",
            "bdSize": "16"
        }, "share": {}
    };
    with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
});