/**
 * Created by ¼ÑÒô on 2015/10/13.
 */
define(['jquery','fhlib/totop','fhlib/navselect','fhlib/search','lazyload','fhlib/imglazy'],function(){
    $(function () {
        var slideDown = true;
        $('#searchClick').click(function () {
            if ($("#search").val() !== "") {
                var key = $("#search").val()
                window.location.href = '/query/' + Cntysoft.toQueryString({'keyword': key}, true);
            }
        });
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
        if(0==$('.now_node').length){
            $('.c_navName').first().click();
        }
        if($('.now_node').parents('.nav_name').length){
            var nowNav=$('.now_node').parents('.nav_name');
            nowNav.show();
            nowNav.prev('.c_navName').addClass('currentSpan').siblings(".c_navName").removeClass("currentSpan");
        }
        $('.now_node').closest('.nav_name>li').children('a').addClass('current');

        $(".nav_name>li").mouseenter(function () {
            $(this).find("a").addClass("current");
//         $(this).siblings(a).find("a").removeClass("current");
        }).mouseleave(function () {
            if(!$(this).hasClass('now_node') && !($(this).find('.now_node')).length) {
                $(this).children("a").removeClass("current");
            }
        });

        $(".l_navBox").find("#Raiders>li").hover(function () {
            $(this).addClass("current");
            $(this).siblings().removeClass("current");
            $(this).find(".m_navList").show();
        }, function () {
            $(this).find(".m_navList").hide();
        });
//R_m_nav
        $("#Raiders").find("li").mouseenter(function () {
            $(this).addClass("current");
            $(this).siblings().removeClass("current");
        });
    })
});