define(['jquery','slick','fhlib/search','fhlib/totop','app/cart_mall',
    'lazyload','fhlib/imglazy','fhlib/navselect'],function() {
    $(document).ready(function () {
        //楼层菜单
        var tab = $('.mall_floor_tab');
        $(tab).find("li:first-child").addClass("current");
        $(tab).find('li').mouseenter(function () {
            var indexA = $(this).index();
            $(this).addClass("current");
            $(this).siblings().removeClass('current');
            $(this).parents().next('.mall_floor_down').children('ul').hide();
            $(this).parents().next('.mall_floor_down').children('ul').eq(indexA).show();
            //console.log($(window).scrollTop());
            $(window).scrollTop($(window).scrollTop()+1);
            $(window).scrollTop($(window).scrollTop()-1);
            return false;
        });
        var classlist = $('#classlist');
        $(classlist).find('.classlist_items').removeClass('current');
        $(classlist).find('.classlist_items').mouseenter(function () {
            var indexA = $(this).index();
            $(this).addClass('current');
            $(this).siblings().removeClass('current');
            $(this).parents('#classlist').next('.classlist_right').children('.classlist_right_list').hide();
            $(this).parents('#classlist').next('.classlist_right').children('.classlist_right_list').eq(indexA).show();
            return false;
        });
        $('.classlist_right').mouseleave(function () {
            $(this).prev('#classlist').children('.classlist_items').removeClass('current');
            $(this).children('.classlist_right_list').hide();
        });
        $('.classlist_box').mouseleave(function () {
            $(this).find('.classlist_items').removeClass('current');
            $(this).find('.classlist_right_list').hide();
        });
        //焦点图
        $(".mall_bannerimg").slick(
            {
                speed: 500,
                slidesToShow: 1,
                autoplaySpeed: 3000,
                arrows: true,
                dots: true,
                fade:true,
                dotsClass: 'banner_downbtn',
                prevArrow: '.banner_leftbtn',
                nextArrow: '.banner_rightbtn'
            });
        //楼层菜单
        var tab = $('.mall_floor_tab');
        $(tab).find("li:first-child").addClass("current");
        $(tab).find('li').mouseenter(function () {
            var indexA = $(this).index();
            $(this).addClass("current");
            $(this).siblings().removeClass('current');
            $(this).parents().next('.mall_floor_down').children('ul').hide();
            $(this).parents().next('.mall_floor_down').children('ul').eq(indexA).show();
            //console.log($(window).scrollTop());
            $(window).scrollTop($(window).scrollTop()+1);
            $(window).scrollTop($(window).scrollTop()-1);
            return false;
        });


//品牌logo
        var sliderFor = $('div[slider-for^="slider-for"]');
        for (var i = 1; i < sliderFor.length + 1; i++) {
            $('div[slider-for^="slider-for' + i + '"]').slick({
                slidesToShow: 1,
                dots: false,
                focusOnSelect: true,
                prevArrow: 'a[left_button=left' + i + ']',
                nextArrow: 'a[right_button=right' + i + ']'
            });
        }
    });
});
