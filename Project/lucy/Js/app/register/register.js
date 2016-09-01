/**
 * Created by wangzan on 2016/1/22.
 */
define(['jquery'], function () {
    $(document).ready(function () {
        $('.login_title i,.register_title i').click(function () {
            $('.login_popup,.register_popup').hide();
        });
    });
});