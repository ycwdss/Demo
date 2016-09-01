/**
 * Created by wangzan on 2015/10/27.
 */

define(['jquery','slick','fhlib/totop',
    'lazyload','Front','fhlib/search','fhlib/navselect'],function($) {

    //$(function () {
    //
    //    $('table tbody tr').siblings().find('td:even').css({
    //        'width':'250px',
    //        'height':'100px',
    //        'background':'#e5f5fd'
    //    });
    //    $('table tbody tr').siblings().find('td:odd').css({
    //        'width':'799px',
    //        'height':'100px',
    //        'background':'#fcebec',
    //        'textAlign':'left',
    //        'padding':'0px 53px 0px 40px',
    //        'lineHeight':'30px',
    //        'color':'#666'
    //    });
    //});
    $('.autoplay').slick({
        slidesToShow:5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        dots: false,
        prevArrow: '.left_btn',
        nextArrow: '.right_btn',
        infinite:true
    });

});
