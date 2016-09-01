/**
 * Created by wangzan on 2016/1/11.
 */
define(['jquery','module/totop','module/drop','module/recommend'], function () {
    $(document).ready(function () {

        $('.drop_menu ').drop();
        //收货地址
        $('.address_new a').click(function () {
            $('.address_fill').slideDown('800');
        });
        $('.submit_not .close').click(function () {
            $('.address_fill').slideUp('800');
            return false;
        });
        $('.del_addr ').click(function () {
            $(this).closest('.addr_ele ').find('.addr_delete').fadeIn(200);
            return false;
        });
        $('.addr_delete .cancel').click(function () {
            $(this).closest('.addr_delete').fadeOut(200);
            return false;
        });
        $('.addr_delete .sure').click(function () {
            $(this).closest('.addr_ele').remove();
        });
        $('html,body').click(function () {
            $('.addr_delete').fadeOut(200)
        });
        //发票
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
            }else {
                $down.show();
                $(this).addClass('active');
            }
            e.stopPropagation();
        });
        $('.set_note .down p,.dis_ticket .down p').click(function () {
            var $elect=$(this).parent().siblings('.select');
            var $arrow=$(this).parent().prev();
            $elect.val($(this).text());
            $(this).parent().hide();
            $elect.removeClass('active');
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