/**
 * Created by ���� on 2015/10/14.
 */
define(['jquery','fhlib/cookie','slick','fhlib/totop',
    'lazyload','Core','Front','fhlib/imglazy','./search_tab'],function($) {

    $(window).scroll(function(){
        var item = $("#pro_list").find(".item");
        var menu = $("#menu");
        var top = $(window).scrollTop();
        var currentId = "";
        if(top>600){
            menu.show();
        }
        else{
            menu.hide();
        }
        item.each(function(){
            var m = $(this);
            if(top> m.offset().top -500){
                currentId = "#" + m.attr("id");
            }else{
                return false;
            }
        });
        var currentLink = menu.find(".current");
        if (currentId && currentLink.attr("href") != currentId) {
            currentLink.removeClass("current");
            menu.find("[href=" + currentId + "]").addClass("current");
        }
    });
    $(function () {
        $('#menu').find('li a').click(function () {
            var indexX=$(this).parent().index();
            $('html,body').animate({
                scrollTop:$('.item').eq(indexX).offset().top
            }, 800);
            return false;
        })
    });
    $('#focus_box').on('init',function(){
        $('#focus_box').removeClass('show_lazy');
    });
   $("#focus_box").slick(
        {
            speed: 500,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            dotsClass:'banner_bottom_btn',
            prevArrow: '.banner_leftbtn',
            nextArrow: '.banner_rightbtn'
        });
});
