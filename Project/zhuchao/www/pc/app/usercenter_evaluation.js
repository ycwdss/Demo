/**
 * Created by Administrator on 2015/10/7.
 */
define(['jquery','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'],function() {
    $(function () {
        $('.show_img img').click(function (event) {
            var n = $.inArray(this, $('.show_img img'));
            if (!$(this).hasClass('img_clicked')) {
                $(this).siblings('.show_img img').removeClass('img_clicked');
                $('.show_img img').eq(n).addClass('img_clicked');
                $(this).parent('.show_img').siblings('.show_big_img').find('img').attr('src', $('.show_img img').attr('src'));
                $(this).parent('.show_img').siblings('.show_big_img').animate({'height': '225px', 'width': '360px'});
            }
            else {
                $(this).removeClass('img_clicked');
                $(this).parent('.show_img').siblings('.show_big_img').animate({'height': '0', 'width': '0'});
                //event.stopPropagation();
            }
        });
        //$('html,body').click(function () {
        //    $('.show_big_img').animate({'height': '0', 'width': '0'});
        //    $('.show_img img').removeClass('img_clicked');
        //})
    });
});