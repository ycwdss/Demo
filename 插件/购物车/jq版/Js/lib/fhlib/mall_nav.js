/**
 * Created by Administrator on 2015/10/26.
 */
define(['jquery'],function(){
    //导航
    var classlist = $('#classlist');
    $(classlist).find('.classlist_items').removeClass('current');
    $(classlist).find('.classlist_items').mouseenter(function () {
        var indexA = $(this).index();
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
        $(this).parents('#classlist').next('.classlist_right').children('.classlist_right_list').hide();
        $(this).parents('#classlist').next('.classlist_right').children('.classlist_right_list').eq(indexA).show();
        return false;
    });
    $('.classlist_right').mouseleave(function () {
        $(this).prev('#classlist').children('.classlist_items').removeClass('current');
        $(this).children('.classlist_right_list').hide();
    });
    $('.classlist_box').mouseleave(function () {
        $(this).find('.classlist_items').removeClass('current');
        $(this).find('.classlist_right_list').hide();
    });

});
