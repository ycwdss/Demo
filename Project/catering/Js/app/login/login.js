/**
 * Created by wangzan on 2016/2/16.
 */
define(['jquery'], function () {
    $(document).ready(function () {
        $('.form_tab li').click(function () {
            var index=$(this).index();
            $(this).find('a').addClass('main').parent().siblings().children('a').removeClass('main');
            $(this).append("<span class='tab_line main_bg'><i></i></span>").siblings().children('.tab_line ').remove();
            $('.form_wrap').find('.form_box').eq(index).show().siblings('.form_box').hide();
            return false;
        });
    });
})