/**
 * Created by wangzan on 2016/1/21.
 */
define(['jquery','module/base'],function(){
    $(document).ready(function () {
        $('.icon_checkbox ').click(function () {
            $(this).addClass('main_bg main_border checked').siblings('.icon_checkbox').removeClass('main_bg main_border checked');
        });
        $('.drop_menu').drop();
    });
});