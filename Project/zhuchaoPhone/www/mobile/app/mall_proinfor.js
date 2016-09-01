/**
 * Created by Administrator on 2015/9/24.
 */
define(['zepto','swiper','fhlib/new_totop','app/modelPage/message_right'],function() {
    $(function () {
        var swipe = new Swiper('.swiper-container', {
            autoplay: 8000,
            loop: true,
            effect: 'coverflow',
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
        $('.c_list li').click(function () {
            $(this).parent('.c_list').find('li').removeClass('clicked');
            $(this).addClass('clicked');
        });
        $('.count span').click(function () {
            var n = $.inArray(this, $('.count span'));
            if (n == 0) {
                if ($('.count input').val() > 1) {
                    $('.count input').val($('.count input').val() - 1);
                }
            }
            else {
                $('.count input').val(parseInt($('.count input').val()) + 1);
            }
        });
        $('.cancel').click(function () {
            $('.shaixuan_bg').hide();
            $('.l_content').show();
        });
        $('.selected').click(function () {
            $('.l_content').hide();
            $('.shaixuan_bg').show();
        });

        //tab切换
        $('.tab span').click(function(){
            var index = $(this).index();
            $('.tab span').removeClass('current');
            $(this).addClass('current');
            $('.tab_content>div').hide();
            $('.tab_content>div').eq(index).show();
        });
    });
    $('.buy').click(function(){
        $.message_right({});
    });
});