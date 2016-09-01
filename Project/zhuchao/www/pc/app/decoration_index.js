/**
 * Created by liu on 15-9-29.
 */
define(["jquery", "fhlib/search", "fhlib/totop", "lazyload", "fhlib/imglazy"], function () {
    $(function () {
        var e = !0;
        $(".lis_arrow").click(function () {
            var t = $.inArray(this, $(".lis_arrow"));
            e == 1 ? ($(".lis_arrow").eq(t).find("span").removeClass("lis_arrow_img1"), $(".lis_arrow").eq(t).find("span").addClass("lis_arrow_img2"), $(".lis_arrow").eq(t).parent(".m_list").animate({height: "100px"}, 200), e = !1) : ($(".lis_arrow").eq(t).find("span").removeClass("lis_arrow_img2"), $(".lis_arrow").eq(t).find("span").addClass("lis_arrow_img1"), $(".lis_arrow").eq(t).parent(".m_list").animate({height: "50px"}, 200), e = !0)
        }), $(".shouqi").click(function () {
            $(".list").height() > 1 ? ($(".m_list").animate({height: "50px"}, 200), $(".list").animate({height: "1px"}, 200), $(".shouqi_text").html("展开"), $(".shouqi_img_com").removeClass("shouqi_img"), $(".shouqi_img_com").addClass("lis_arrow_img1")) : ($(".list").animate({height: "255px"}), $(".shouqi_text").html("收起"), $(".shouqi_img_com").removeClass("lis_arrow_img1"), $(".shouqi_img_com").addClass("shouqi_img"))
        }), $(".sort li").click(function () {
            $(".sort li").removeClass("sort_click"), $(this).addClass("sort_click")
        });
    });
});
