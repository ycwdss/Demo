/**
 * Created by Administrator on 2016/2/15.
 */
define(['jquery','module/totop','module/drop'], function () {
    $(document).ready(function () {
        $('.icon_checkbox ').click(function () {
            $(this).addClass('main_bg main_border checked').siblings('.icon_checkbox').removeClass('main_bg main_border checked');
        });

    });
});