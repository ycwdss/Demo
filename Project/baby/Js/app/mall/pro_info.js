/**
 * Created by jiayin on 2016/2/15.
 */
define(['jquery', 'slick','module/totop'], function () {
    $(document).ready(function () {
        //��ƷСͼͼƬ�л�
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
        //���СͼͼƬ�б�ı���ƷͼƬ
        $('.small_tab_list').click(function () {
            $('.small_tab_list').find('img').removeClass('main_border');
            $(this).find('img').addClass('main_border');
            var ImgAttr=$(this).find('img').attr('src');
            $('.pro_big_img').find('img').attr('src',ImgAttr);
        });
        //���ͼƬ���ִ�ͼ
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
        //��
        $('.btn_add').click(function () {
            var $value = $(this).prev('input');
            $value.val(+$value.val() + 1);
            $('#proNum').keyup();
        });
        //����
        $('.btn_minus').click(function () {
            var $value = $(this).next('input');
            $value.val($value.val() - 1);
            $('#proNum').keyup();
        });
        //�����ı�
        $('#proNum').keyup(function () {
            var val = $(this).val();
            if (!$.isNumeric(val) || val < 1) {
                $(this).val(1);
            }
        });
        //�л���Ʒ����
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
        //�̶���������
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

        //�ɹ����빺�ﳵ
        $('.add_cart').click(function () {
            $('.success_cart').fadeIn(200);
            return false;
        });
        $('.close').click(function () {
            $('.popup_box').fadeOut(200);
        });
        //���ѡ��
        $('.spec_box ul li').click(function(){
            $(this).addClass('main_bg main_border').siblings().removeClass('main_bg main_border');
        })

    });
    //����
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