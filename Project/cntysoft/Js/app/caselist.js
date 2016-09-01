/**
 * Created by jiayin on 2015/12/28.
 */
define(['jquery','slick','model/totop'], function () {
    $(function(){
        $("#banner").slick(
            {
                autoplay:false,
                speed: 500,
                slidesToShow: 1,
                arrows:true ,
                dots: false,
                infinite:false,
                lazyLoad: 'ondemand',
                prevArrow: '.prev',
                nextArrow: '.next'

            });
        //banner��̬
        $('.banner_arrow').click(function(){
            $('#banner .text').removeClass('active');
            $('#banner').find('.slick-active .text').addClass('active');
        });
        //�
        var caseNav = $('.case_nav');
        $(caseNav).find("li:first-child").addClass("current");
        $('.case_list_box').find("ul:first-child").addClass("current");
        !$(caseNav).find('li').click(function () {
            var indexA = $(this).index();
            $(this).addClass("current");
            $(this).siblings().removeClass('current');
            $(this).parents().next().children('ul').removeClass('current');
            $(this).parents().next().children('ul').eq(indexA).addClass('current');
        });
        //�ı���ɫ
        //var whiteDiv = ['case_banner'];
        //var whiterRange = new Array();
        //for(var i = 0;i<whiteDiv.length;i++){
        //    var $div = $('.' + whiteDiv[i]);
        //    whiterRange.push([
        //        $($div).position().top,
        //        $($div).position().top+$($div).height()
        //    ])
        //}
        //
        //$(window).scroll(function(){
        //    var color = getColor();
        //
        //});
        //
        //function getColor(){
        //    var scrollTop = $(window).scrollTop();
        //    for(var i = 0;i<whiterRange.length;i++){
        //        if(scrollTop>=whiterRange[i][0] && scrollTop<whiterRange[i][1]){
        //            $('.header').removeClass('header_black').addClass('header_white');
        //            return false;
        //        }
        //    }
        //    $('.header').removeClass('header_white').addClass('header_black');
        //
        //}

    })
});