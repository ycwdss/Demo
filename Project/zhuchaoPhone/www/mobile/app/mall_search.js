/**
 * Created by Administrator on 2015/9/25.
 */
define(['zepto','fhlib/new_totop'],function() {
    $(function () {
        $('.nav_ele').click(function () {
            $('.nav_ele').removeClass('current');
            $(this).addClass('current');
        });
        $('.del_history').click(function () {
            $('.history_ele').remove();
        })
    });
});