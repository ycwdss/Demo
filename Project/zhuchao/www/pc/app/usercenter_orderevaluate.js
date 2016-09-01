/**
 * Created by Administrator on 2015/10/8.
 */
define(['jquery','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'],function() {
    $(function () {
        $('.wujiaoxing').click(function () {
            var n = $.inArray(this, $('.wujiaoxing'));
            for (var i = 4; i > n; i--) {
                if (!$('.wujiaoxing').eq(i).hasClass('wujiaoxing2')) {
                    $('.wujiaoxing').eq(i).addClass('wujiaoxing2');
                }
            }
            for (var j = 0; j <= n; j++) {
                if ($('.wujiaoxing').eq(j).hasClass('wujiaoxing2')) {
                    $('.wujiaoxing').eq(j).removeClass('wujiaoxing2');
                }
            }
        });
        $('.textarea').keyup(function () {
            var n = $('.textarea').val();
            $('.last_word span').html(250 - n.length);
        });
        $('.add_img').click(function () {
            $('.add_tool').eq($.inArray(this, $('.add_img'))).click();
        })
    });
});