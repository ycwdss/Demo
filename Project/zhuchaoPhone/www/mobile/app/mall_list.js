/**
 * Created by Administrator on 2015/9/24.
 */
define(['zepto','fhlib/new_totop'],function() {
    $(function () {
        $('.nav_ele').click(function () {
            if ($.inArray(this, $('.nav_ele')) < 3) {
                $('.nav_ele').removeClass('current');
                $(this).addClass('current');
            }
            else {
                $('html,body').css({'height':'100%','overflow':'hidden'});
                //$('.l_content').hide();
                $('.shaixuan_bg').show();
            }
        });
        $('.l_sort li').click(function () {
            $('.shaixuan').hide();
            $('.shaixuan_detail').eq($.inArray(this, $('.l_sort li'))).show();
        });
        $('.shaixuan_detail .m_sort_topleft').click(function () {
            var text = $('.m_sort_clicked').html();
            $('.chosen').eq($.inArray(this, $('.shaixuan_detail .m_sort_topleft'))).html(text);
            $('.shaixuan_detail').hide();
            $('.shaixuan').show();
        });
        $('.m_sort li').click(function () {
            $('.m_sort li').removeClass('m_sort_clicked');
            $(this).addClass('m_sort_clicked');
        });
        $('.del').click(function () {
            $('.chosen').html('全部');
            for (var i = 0; i < $('.m_sort').size(); i++) {
                $('.m_sort').eq(i).find('li').removeClass('m_sort_clicked');
                $('.m_sort').eq(i).find('li').eq(0).addClass('m_sort_clicked');
            }
        });
        $('.cancel').click(function () {
            $('.shaixuan_bg').hide();
            //$('.l_content').show();
            $('html,body').css({'height':'auto','overflow':'visible'});
        });
    });
});