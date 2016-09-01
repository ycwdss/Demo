/**
 * Created by Administrator on 2016/2/2.
 */
define(['jquery','module/totop','module/recommend','module/drop','module/base'], function () {
    $(document).ready(function () {
        //删除收货地址
        $('.del_addr').click(function(e){
            $('.msg_tip').hide();
            $(this).find('.msg_tip').show();
            e.stopPropagation();
        });
        $('.del_msg').click(function(){
            $(this).parents('.addr_ele').remove();
        });
        $('.cancel_del').click(function(e){
            $(this).parents('.msg_tip').hide();
            e.stopPropagation();
        })
        $('html,body').click(function(){
            $('.msg_tip').hide();
        });
        /*
         * 新增收货地址
         * */
        $('.new_address p').click(function(){
            $('.new_addr').show();
        });
        $('.addr_cancel').click(function(){
            $('.new_addr').hide();
        });
    });
});