/**
 * Created by Administrator on 2015/9/22.
 */
define(['zepto','fhlib/new_totop'],function() {
    $(function () {
        $('.nav_ele').click(function () {
            if ($.inArray(this, $('.nav_ele')) < 2) {
                $('.nav_ele').removeClass('current');
                $(this).addClass('current');
            }
            else {
                //$('.l_content').hide();
                $('html,body').css({'height':'100%','overflow':'hidden'});
                $('.shaixuan_bg').show();
            }
        });
        $('.l_sort').click(function () {
            var n = $.inArray(this, $('.l_sort'));
            if ($(this).find('.arrow_short').size() == 0) {
                $('.list').eq(n).find('.m_sort').show();
                $(this).find('.arrow_more').addClass('arrow_short');
            }
            else {
                $(this).find('.arrow_more').removeClass('arrow_short');
                $('.list').eq(n).find('.m_sort').hide();
                $('.list').eq(n).find('.sort').hide();
            }
        });
        $('.m_sort').click(function () {
            var n = $.inArray(this, $('.m_sort'));
            if ($(this).find('.arrow_short').size() == 0) {
                $(this).next('.sort').show();
                $(this).find('.arrow_more').addClass('arrow_short');
            }
            else {
                $(this).next('.sort').hide();
                $(this).find('.arrow_more').removeClass('arrow_short');
            }
        });
        $('.sort li').click(function () {
            if ($('.sort').find('.click').size() == 0) {
                $(this).addClass('click');
            }
            else {
                $('.sort li').removeClass('click');
                $(this).addClass('click');
            }
        });
        $('.cancel').click(function () {
            $('html,body').css({'height':'auto','overflow':'visible'});
            $('.shaixuan_bg').hide();
        })
    });
});