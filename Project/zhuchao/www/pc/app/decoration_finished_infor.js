/**
 * Created by º—“Ù on 2015/10/7.
 */
define(["jquery","fhlib/totop", "lazyload", "fhlib/imglazy"], function () {
    $(document).ready(function() {
        var caseNav = $('#caseNav');
        $(caseNav).find("li:first-child").addClass("current");
        $(caseNav).find('li').mouseenter(function () {
            var indexA = $(this).index();
            $(this).addClass("current");
            $(this).siblings().removeClass('current');
            $(this).parents('.case_design_nav').next('#caseBox').children('.case_design_sheji').hide();
            $(this).parents('.case_design_nav').next('#caseBox').children('.case_design_sheji').eq(indexA).show();
            return false;
        })
    })
});