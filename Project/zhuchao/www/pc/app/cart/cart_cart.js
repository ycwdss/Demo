define(['jquery','slick','fhlib/search','fhlib/totop','app/cart_mall',
    'lazyload','fhlib/imglazy','fhlib/navselect'],function() {
    $(document).ready(function () {
        //楼层菜单
        var navtab = $('#interestedNav');
        $(navtab).find("li:first-child").addClass("current");
        $(navtab).find('li').mouseenter(function () {
            var indexA = $(this).index();
            $(this).addClass("current");
            $(this).siblings().removeClass('current');
            $(this).parents().next('#interestedProList').children('ul').hide();
            $(this).parents().next('#interestedProList').children('ul').eq(indexA).show();
            return false;
        });
    });
});

