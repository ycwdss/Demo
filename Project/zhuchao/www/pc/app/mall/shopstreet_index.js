define(['jquery', 'slick', 'fhlib/search', 'fhlib/totop',
    'lazyload', 'fhlib/imglazy', 'fhlib/navselect'], function () {
    $(document).ready(function () {
        //¥���߲˵�
        $(window).scroll(function () {
            var Floor = $(".shopstreet_floor");
            var FloorSideNav = $('#FloorSideNav');
            var top = $(window).scrollTop();
            var bottom = $(document).height() - 100 - top - FloorSideNav.height();
            var currentId = "";
            if (top > 600 && bottom >= 245) {
                FloorSideNav.fadeIn(300);
            }
            else {
                FloorSideNav.fadeOut(300);
            }
            Floor.each(function () {
                var m = $(this);
                if (top > m.offset().top - 100) {
                    currentId = "#" + m.attr("id");
                } else {
                    return false;
                }
            });

            var currentLink = FloorSideNav.find(".current");
            if (currentId && currentLink.attr("href") != currentId) {
                currentLink.removeClass("current");
                FloorSideNav.find("[href=" + currentId + "]").parent('li').addClass("current");
            }
        });
        //¥��˵�
        var floorNav = $('.shopstreet_floor_nav');
        $(floorNav).find("li:first-child").addClass("current");
        $(floorNav).find('li:not(:last-child)').mouseenter(function () {
            var indexA = $(this).index();
            $(this).addClass("current");
            $(this).siblings().removeClass('current');
            $(this).parents().next('.shopstreet_list_box').children('ul').hide();
            $(this).parents().next('.shopstreet_list_box').children('ul').eq(indexA).show();
        });
    });
});
