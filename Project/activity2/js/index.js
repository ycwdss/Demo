/**
 * Created by wangzan on 2016/3/28.
 */
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        nextButton: '.next_step',
        noSwiping: true,
        mousewheelControl : true,
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            $('.first_page .header img').addClass('animated zoomIn')
            $('.first_page .header p').addClass('animated fadeInUp')
        },

        onSlideChangeStart: function (swiper) {

            if (swiper.activeIndex == 0) {
                $('.first_page .header img').addClass('animated zoomIn')
                $('.first_page .header p').addClass('animated fadeInUp')
            } else {
                $('.first_page .header img').removeClass('animated zoomIn')
                $('.first_page .header p').removeClass('animated fadeInUp')
            }

            if (swiper.activeIndex == 2) {
                $('.third_page').find('.third_header').addClass('animated zoomIn')
            } else {
                $('.third_page').find('.third_header').removeClass('animated zoomIn')
            }
        },

    });


    var currYear = (new Date()).getFullYear();
    var opt = {};
    opt.date = {preset: 'date'};
    opt.datetime = {preset: 'datetime'};
    opt.time = {preset: 'time'};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式
        mode: 'scroller', //日期选择模式
        dateFormat: 'yyyy-mm-dd',
        lang: 'zh',
        showNow: true,
        nowText: "今天",
        startYear: currYear - 10, //开始年份
        endYear: currYear + 10 //结束年份
    };

    $("#appDate").mobiscroll($.extend(opt['date'], opt['default']));

    //如果是移动设备访问的时候加入如下js 控制

    $('.form_list input[type=text]').focusin(function () {
        $('.third_page .header').hide();
        $('.third_page .body').css({
            'marginTop':'0',
            'position':'absolute',
            'left':0,
            'top':0,
            'width':100+'%',
        });
        $('.third_page .footer').hide();
    });

    $(window).resize(function (event) {
        $('.third_page .header').hide();
        $('.third_page .body').css({
            'marginTop':'0',
            'position':'absolute',
            'left':0,
            'top':0,
        });
        $('.third_page .footer').hide();
    });
    $('#appDate').blur(function () {
        $('.third_page .header').show();
        $('.third_page .body').css({
            'marginTop':40+'px',
            'marginLeft':'auto',
            'marginRight':'auto',
            'position':'static',
            'width':90+'%',
        });
        $('.third_page .footer').show();
    });
    $('.form_list .submit').click(function () {
        $('.third_page .header').show();
        $('.third_page .body').css({
            'marginTop':40+'px',
            'marginLeft':'auto',
            'marginRight':'auto',
            'position':'static',
            'width':90+'%',
        });
        $('.third_page .footer').show();  
    });
});