/**
 * Created by wangzan on 2016/1/11.
 */
define(['jquery','module/totop','module/drop'], function () {
    $(document).ready(function () {
        //新增地址

        $('.address_new').find('.check').click(function () {
            if($(this).hasClass('main_bg')){
                $(this).removeClass('main_bg main_border');
                $('.address_edit').slideUp(300);
            }else {

                $(this).addClass('main_bg main_border');
                $('.address_edit').slideDown(300);
            }
        });

        $('.address_change').click(function () {
            $('.address_edit').slideDown(300);
            return false;
        });
        $('.address_remove').click(function () {
            $(this).parent().parent('li').remove();
        });
        //发票
        $('.ticket_box').find('.check').click(function () {
            if($(this).hasClass('main_bg')){
                $(this).removeClass('main_bg main_border');
            }else {
                $(this).addClass('main_bg main_border').parent().siblings().find('.check').removeClass('main_bg main_border');
            }
        });
        //使用优惠券
        $('.use_ticket').find('.check').click(function (ev) {
            if($(this).hasClass('main_bg main_border')){
                $(this).removeClass('main_bg main_border');
                $('.coupon_info_box').hide();
            }else {
                $(this).addClass('main_bg main_border');
                $('.coupon_info_box').show();
            }
            ev.stopPropagation();
        });
        //优惠券切换
        $('.coupon_info_tab li').click(function (ev) {
            $(this).addClass('main').removeClass('active').siblings().removeClass('main').addClass('active');
            $('.tab_container').children().eq($(this).index()).show().siblings().hide();
            ev.stopPropagation();
        });
        $('.coupon_info_box').click(function (ev) {
            ev.stopPropagation();
        });

        $('html,body,.btn_gray,.offbtn').click(function () {
            $('.coupon_info_box').fadeOut(200);
            $('.use_ticket').find('.check').removeClass('main_bg main_border');
        });
    });
})