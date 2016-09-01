define(['jquery','fhlib/totop','lazyload','fhlib/imglazy',"fhlib/list"],function(){
        var slideDown = true;
        $(".c_navName").click(function () {
            if (slideDown) {
                slideDown = false;
                $(this).toggleClass("currentSpan").siblings(".c_navName").removeClass("currentSpan");
                $(this).next(".nav_name").slideToggle(200).siblings(".nav_name").slideUp(300);
                setTimeout(function () {
                    slideDown = true;
                }, 300);
            }

        });
        if ($('.now_node').parents('.nav_name').length) {
            var nowNav = $('.now_node').parents('.nav_name');
            nowNav.show();
            nowNav.prev('.c_navName').addClass('currentSpan').siblings(".c_navName").removeClass("currentSpan");
        }
        $('.now_node').closest('.nav_name>li').children('a').addClass('current');

        $(".nav_name>li").mouseenter(function () {
            $(this).find("a").addClass("current");
//         $(this).siblings(a).find("a").removeClass("current");
        }).mouseleave(function () {
            if (!$(this).hasClass('now_node') && !($(this).find('.now_node')).length) {
                $(this).children("a").removeClass("current");
            }
        });
});