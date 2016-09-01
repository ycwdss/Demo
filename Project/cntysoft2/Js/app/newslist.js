/**
 * Created by liu on 15-12-19.
 */

define(['jquery', 'model/totop', 'model/base'], function () {
    $(function () {
        $('.caption').each(function (i, element) {
            $(element).hover(function () {
                $('.dots').eq(i).addClass('active').siblings('.dots').removeClass('active');
            },function () {
                $('.dots').removeClass('active');
            });
        })
    })
});