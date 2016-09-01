/**
 * Created by 佳音 on 2015/10/28.
 */
define(['jquery', 'slick', 'fhlib/totop', 'fhlib/navselect',
    'lazyload', 'fhlib/imglazy'], function () {

    var goodsList = $('ul[goods-list^="goods-list"]');
    for (var i = 1; i < goodsList.length + 1; i++) {
        $('ul[goods-list^="goods-list' + i + '"]').slick({
            slidesToShow: 6,
            slidesToScroll: 2,
            dots: false,
            focusOnSelect: true,
            prevArrow: 'a[left_button=left' + i + ']',
            nextArrow: 'a[right_button=right' + i + ']'
        });
    }


    $(window).scroll(function () {
        var proList = $(".right_product_list");
        var leftNav = $("#leftNav");
        var top = $(window).scrollTop();
        var bottom = $(document).height() - 10 - top - leftNav.height();
        var currentId = "";
        if (top > 1300 && bottom >= 99) {
            leftNav.addClass('current');
        }
        else {
            leftNav.removeClass('current');
        }
        proList.each(function () {
            var m = $(this);
            if (top > m.offset().top - 100) {
                currentId = "#" + m.attr("id");
            } else {
                return false;
            }
        });
        $(function () {
           $(leftNav).find('li a').click(function () {
                var indexX=$(this).parent().index();
                $('html,body').animate({
                    scrollTop:$(proList).eq(indexX).offset().top
                }, 800);
                return false;
            })
        });
        var currentLink = leftNav.find(".current");
        if (currentId && currentLink.attr("href") != currentId) {
            currentLink.removeClass("current");
            leftNav.find("[href=" + currentId + "]").addClass("current");
        }
    });

});