/**
 * Created by wangzan on 2016/3/18.
 */
define(['jquery','circle-progress'], function () {
    $(function () {
        $('#circle').circleProgress({
            value: 0.6,
               size: 50,
               fill: {
                   gradient: ["#093"]
               }
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
        });
    });
});