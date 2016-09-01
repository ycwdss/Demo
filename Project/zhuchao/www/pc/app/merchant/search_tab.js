/**
 * Created by guan on 2015/10/13.
 */
    //���������л�
define(['jquery','fhlib/cookie','slick','fhlib/totop',
    'lazyload','Core','Front','fhlib/imglazy'],function($) {
        var aA = $('.search_button').find('a');
        aA.each(function () {
            $(this).click(function () {
                aA.attr('class', '');
                $(this).attr('class', 'active');
            });
        });
});