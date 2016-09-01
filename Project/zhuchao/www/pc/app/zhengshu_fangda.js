/**
 * Created by Administrator on 2015/10/26.
 */
define(['jquery'], function () {
    $(function() {
        var n = $('.certificate img');
        for (var i = 0; i < n.size(); i++) {
            $('.show_img').append('<div class="c_show_img"><p><span></span>/<span></span></p><img src=' + $('.certificate img').eq(i).attr('src') + '></div>');
        }
        $('.c_show_img span').html($('.certificate img').size());
        $('.certificate img').click(function (event) {
            var m = $('.show_img div');
            $('.show_img_bg').show();
            m.eq($.inArray(this, $('.certificate img'))).addClass('show');
            $('.show span').eq(0).html($('.show').index() - 1);
        });
        $('.arrow_com').click(function (event) {
            var now = $('.show').index();
            $('.show_img div').removeClass('show');
            if ($(this).hasClass('arrow_prev')) {
                $('.show_img div').eq(Math.max(now - 3, 0)).addClass('show');
            }
            else {
                $('.show_img div').eq(Math.min(now - 1, $('.show_img div').size() - 1)).addClass('show')
            }
            $('.show span').eq(0).html($('.show').index() - 1);
            event.stopPropagation();
        });
        $('.show_img img').click(function (event) {
            event.stopPropagation();
        });
        $('.show_img_bg').click(function () {
            $('.show_img div').removeClass('show');
            $('.show_img_bg').hide();
        });
    });
});