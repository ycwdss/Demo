/**
 * Created by Administrator on 2015/9/23.
 */
define(['zepto','fhlib/new_totop','fhlib/xiaoguotu_pubuliu'],function() {
    $(function () {
        $('.sort li').click(function () {
            if ($(this).hasClass('sort_click')) {
                $('.sort_detail_bg').eq($.inArray(this, $('.sort li'))).hide();
                $(this).removeClass('sort_click');
                $('.l_content').show();
                $('html,body').css({'height': 'auto', 'overflow': 'visible'});
                $('.sort').css({'position': 'relative'});
            }
            else {
                $('html,body').css({'height': '100%', 'overflow': 'hidden'});
                $('.l_content').hide();
                $('.sort').css({'position': 'absolute', 'z-index': '10001'});
                $('.sort li').removeClass('sort_click');
                $(this).addClass('sort_click');
                $('.sort_detail_bg').hide();
                $('.sort_detail_bg').eq($.inArray(this, $('.sort li'))).show();
            }
        });
        $('.sort_detail').not('last-child').find('li').click(function () {
            $('.sort_detail li').removeClass('sort_detail_click');
            $(this).addClass('sort_detail_click');
        })
    });
});