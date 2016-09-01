/**
 * Created by wangzan on 2016/1/18.
 */
define(['jquery', 'totop','qrcode','module/qrcode'], function () {
    $(document).ready(function () {
        $('.content_title  a').click(function () {
            $('.address_new').slideDown('800');
            return false;
        });
        $('.submit_not .close').click(function () {
            $('.address_new').slideUp('800');
            return false;
        });
        $('.address_eidt .edit').click(function () {
            $('.address_new').slideDown('800');
            return false;
        });
        $('.default_addr').click(function(){
            if(!$(this).hasClass('show')){
                $('.show').html('设为默认地址');
                $('.default_addr').removeClass('show');
                $(this).addClass('show');
                $(this).html('默认地址');
            }
        });
        $('.del_addr').click(function(){
            $(this).parents('.list').remove();
        });
    });
});