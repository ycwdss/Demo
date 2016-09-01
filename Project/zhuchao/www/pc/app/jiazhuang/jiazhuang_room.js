/**
 * Created by wangzan on 2015/10/29.
 */
define(['jquery', 'slick', 'slidemenu', 'fhlib/totop',
    'lazyload', 'Front', 'fhlib/search', 'fhlib/navselect'], function ($) {
    $(function () {
        $.fn.manhuatoTop = function (options) {
            var defaults = {
                showHeight: 150,
            };
            var options = $.extend(defaults, options);
            var $toTop = $(this);
            var $top = $(".left_bar");
            var scrolltop = $(window).scrollTop();
            $top.hide();
            if (scrolltop >= options.showHeight) {
                $top.show();
            }
            $toTop.scroll(function () {
                var scrolltop = $(this).scrollTop();
                if (scrolltop >= options.showHeight) {
                    $top.show();
                }
                else {
                    $top.hide();
                }
            });
        }
    });
    $(function () {
        $(window).manhuatoTop({
            showHeight: 1000,
        });
    })


    //侧边栏----------
    $(function () {
        $('.left_bar li a').click(function () {
            $(this).addClass('present').parent().siblings().children().removeClass('present');
        });
        var liLength = $('.left_bar li').length;
        $(window).scroll(function () {
            for (var i = 0; i < liLength; i++) {
                if ($(window).scrollTop() + $(window).height() - $('.skip').eq(i).offset().top >= 0) {
                    $('.left_bar li').eq(i).children().addClass('present').parent().siblings().children().removeClass('present')
                }
            }
        })
    })
    //每项多出滑动------------
    $(function () {
        var skip = $('.skip');
        for (var i = 0; i < skip.length + 1; i++) {
            $('.slid' + i + ' .multiple-items').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable:false,
                arrows: true,
                dots: false,
                prevArrow: '.left_btn' + i,
                nextArrow: '.right_btn' + i
            });
        }
    })
    //滑动手风琴页面-------------
    var olength = $('#sm').children('li').length;
    $(function () {
        slideMenu.build('sm', 960, 20, 10, olength);
        $('.mask').hover(function () {
            $(this).parent().addClass('focus').siblings().removeClass('focus')
        })
        //客厅 卧室 厨房 玄关 滑动
        $('.nav p').css({left: '0px'})
        var oLi = $('.nav li');
        $('.nav li').click(function () {
            var distance = oLi.width() * $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('.nav p').css({left: distance + 'px'}, 5000);
            $('.slide_tab').slick('slickGoTo', $(this).index());
        })

        $('.slide_tab').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            autoplay: false,
            //autoplaySpeed:500,
            cssEase: 'linear',
            arrows: false,
            dots: false
        });
    })

});