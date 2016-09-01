/**
 * Created by wangzan on 2015/11/2.
 */
define(['zepto','fhlib/new_totop'],function() {
    //$('.choice_ele').click(function(){
    //    if(!$(this).hasClass('no_click')&&!$(this).hasClass('clicked')) {
    //        $(this).siblings('.choice_ele').removeClass('clicked');
    //        $(this).addClass('clicked');
    //    }
    //});
    $(function () {

    $('.pay_way .select_which_way ul li a').click(function(){
       $(this).children('.check').show();
       $(this).addClass('on').parent('li').siblings().children('a').removeClass('on').children('.check').hide();
        return false;
    })
        $('.send_way ul li a').click(function () {
            $(this).children('.check').toggle();
            $(this).toggleClass('on');
            return false;
        })
    })
});