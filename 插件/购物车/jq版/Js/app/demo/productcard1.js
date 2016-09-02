/**
 * Created by º—“Ù on 2015/11/26.
 */
define(['jquery','lazyload', 'fhlib/imglazy'], function () {
    $(document).ready(function () {
        //tab
        var pro_tab = $('.pro_tab');
        $(pro_tab).find("li:first-child").addClass("current");
        !$(pro_tab).find('li').mouseenter(function () {
            var indexA = $(this).index();
            $(this).addClass("current");
            $(this).siblings().removeClass('current');
            $(this).parents().next().children('ul').addClass('tab_content_hide');
            $(this).parents().next().children('ul').eq(indexA).removeClass('tab_content_hide');
        });
    });
});
