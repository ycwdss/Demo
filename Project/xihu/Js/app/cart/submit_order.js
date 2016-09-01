/**
 * Created by wangzan on 2016/1/11.
 */
define(['jquery','module/base','module/drop'], function () {
    $(document).ready(function () {

        //地址
        $('.add_addr').click(function(){
            $('.new_addr').fadeIn(200);
        });
        //关闭二维码,平台支付完成
        $('.pay_offbtn').click(function(){
            $(this).parents('.new_addr').fadeOut(200);
        });
        //发票
        $('.need').click(function () {
            $('.fill_note').slideDown();
        });
        $('.no_need').click(function () {
            $('.fill_note').slideUp();
        });

        $('.select').click(function (e) {
            var $i = $(this).next().find('i');
            var $down = $(this).siblings('.down');
            if ($(this).hasClass('active')) {
                $down.hide();
                $(this).removeClass('active');
            } else {
                $down.show();
                $(this).addClass('active');
            }
            e.stopPropagation();
        });
        $('.down p').click(function () {
            var $elect = $(this).parent().siblings('.select');
            var $arrow = $(this).parent().prev();
            $elect.val($(this).text());
            $(this).parent().hide();
            $elect.removeClass('active');
        });
        $('html,body').click(function () {
            $('.down').hide();
            $('.set_note .select,.dis_ticket  .select').removeClass('active');
        });
        //优惠券
        $('.fill_link').click(function () {
            $(this).hide();
            $(this).next().show();
            return false;
        });

    });
});