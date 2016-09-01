/**
 * Created by ���� on 2015/10/14.
 */
define(['jquery','fhlib/cookie','fhlib/totop',
    'lazyload','Core','Front','fhlib/imglazy'],function($) {

    $(window).scroll(function(){
        var item = $(".item");
        var sideNav = $("#sideNav");
        var top = $(window).scrollTop();
        var currentId = "";
        if(top>600){
        item.each(function(){
            var m = $(this);
            if(top> m.offset().top -800){
                currentId = "#" + m.attr("id");
            }else{
                return false;
            }
        });
        var currentLink = sideNav.find(".current");
        if (currentId && currentLink.attr("href") != currentId) {
            currentLink.removeClass("current");
            sideNav.find("[href=" + currentId + "]").parent('li').addClass("current");
        }
    }
    });

    //弹出手机号码框
    $('.module_sale_list>li').hover(function(){
        $(this).find('.tel').stop().animate({
                width: "122px",
                left:'-124px'
            }, 500);
    },function(){
        $(this).find('.tel').stop().animate({
                width: "0",
                left:'0'
            }, 300)
    });
});
