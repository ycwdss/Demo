/**
 * Created by wangzan on 2016/1/11.
 */
define(['jquery','totop'], function () {
    $(document).ready(function () {
        $('.address_info .list').hover(function () {
            $(this).children('.address_eidt ').show();
        }, function () {
            $(this).children('.address_eidt ').hide();
        });
        //收货地址
        $('.new_address').click(function () {
            $('.address_fill').slideDown('800');
        });
        $('.submit_not .close').click(function () {
            $('.address_fill').slideUp('800');
            return false;
        });
        $('.need').click(function () {
           $('.fill_note').slideDown();
        });
        $('.no_need').click(function () {
            $('.fill_note').slideUp();
        });
        $('.set_note .select,.dis_ticket  .select').click(function (e) {
            var $i=$(this).next().find('i');
            var $down=$(this).siblings('.down');
            if($(this).hasClass('active')){
                $down.hide();
                $(this).removeClass('active');
                $i.html('&#xe613;');
            }else {
                $down.show();
                $(this).addClass('active');
                $i.html('&#xe612;');
            }
            e.stopPropagation();
        });
        $('.set_note .down p,.dis_ticket .down p').click(function () {
            var $elect=$(this).parent().siblings('.select');
            var $arrow=$(this).parent().prev();
            $elect.val($(this).text());
            $(this).parent().hide();
            $elect.removeClass('active');
            $arrow.find('i').html('&#xe613;');
        });
        $('html,body').click(function () {
            $('.down').hide();
            $('.set_note .select,.dis_ticket  .select').removeClass('active');
        });
        $('.fill_link').click(function () {
            $(this).hide();
            $(this).next().show();
            return false;
        });
    });
})