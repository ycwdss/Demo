/**
 * Created by Administrator on 2016/2/2.
 */
define(['jquery', 'module/totop','module/drop'], function () {
    $(document).ready(function () {
        //ÐÂÔöµØÖ·

        $('.address_new').find('.check').click(function () {
            if ($(this).hasClass('main_bg')) {
                $(this).removeClass('main_bg main_border');
                $('.address_edit').slideUp(300);
            } else {

                $(this).addClass('main_bg main_border');
                $('.address_edit').slideDown(300);
            }
        });
        $('.address_li3').click(function () {
            $('.address_edit').slideDown(300);
            return false;
        });
        $('.del_btn').click(function () {
            $(this).parents('.address_items ').remove();
        });

    });
});