/**
 * Created by wangzan on 2015/12/17.
 */

/**
 * Created by wangzan on 2015/12/13.
 */
define(['jquery','../model/head','../model/totop'],function(){

    $(document).ready(function () {
        //==============填写订单===============
        //切换收货地址
        $('.address_info li .check_radio').click(function () {
            $(this).parent().parent().addClass('current').siblings().removeClass('current');
        });
        //删除地址
        $('.address_eidt .delet').click(function () {
            $(this).parents('li.list').remove();
        });
        //修改地址显示弹窗
        $('.pop_btn').click(function () {
            $('.mask').show();
        });
        $('.mask .close').click(function () {
            $('.mask').hide();
        });
        $('.fill_detail textarea').click(function () {
            $(this).prev().hide();
        });
        //地址更多显示
        $('.more_show em').toggle(function () {
            $('.address_info li:gt(2)').show();
            $(this).find('i').addClass('arrow');
        }, function () {

            $('.address_info li:gt(2)').hide();
            $(this).find('i').removeClass('arrow');
        });
        //使用优惠券
        $('.ticket_title a').toggle(function () {
            $('.ticket_toggle').show();
        }, function () {
            $('.ticket_toggle').hide();
        });
        $('.ticket_toggle ul li').click(function () {
            $(this).addClass('current').siblings().removeClass('current');
            $('.ticket_container .list').eq($(this).index()).show().siblings().hide();
        });
    });
});
