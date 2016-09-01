/**
 * Created by wangzan on 2016/1/21.
 */
define(['jquery','module/base'],function(){
    $(document).ready(function () {
        $('.address_new ').click(function () {
            $('.address_popup').show();
        });
        $('.close_btn').click(function () {
            $('.address_popup').hide();
        });
        //修改
        $('.address_edit').click(function () {
            $('.address_popup').show();
        });
        //删除
        $('.address_del').click(function () {
            $(this).parents('.address_wrap').remove();
        });
        $('.drop_menu').drop();
    });
});