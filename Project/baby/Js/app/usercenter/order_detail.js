/**
 * Created by Administrator on 2016/2/15.
 */
define(['jquery', 'module/totop', 'module/recommend','module/base'], function () {
    $(document).ready(function () {
        $('.logistics h1 a').click(function () {
            $('.receiver_summary').remove();
            $('.logistics_info').slideDown(200);
            return false;
        });
    });
});