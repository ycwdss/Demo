/**
 * Created by wangzan on 2016/2/16.
 */
define(['jquery'], function () {
    $(document).ready(function () {
        //自动登录
        $('.form_operate span').click(function () {
            $(this).find('i').toggleClass('icon-get');
        });
        $('.form_agree em').click(function () {
            $(this).find('i').toggleClass('icon-get');  
        });
    });
})