/**
 * Created by wangzan on 2016/3/17.
 */
define(['jquery'], function () {
    $(function () {
        $('.acticle_box  span').each(function () {
            if($(this).text().length>150){
                $(this).text($(this).text().substring(0,150));
                $(this).html($(this).html()+'...');
            }
        });
        //全選
        $('.inquiry_delete').find('.check').click(function() {
            var $this = $(this);
            if ($this.find('i').hasClass('icon-checked')) {
                $('.inquiry_delete').find('.check i').removeClass('icon-checked');
                $('.inquiry_list ').find('.check i').removeClass('icon-checked');
            } else {
                $('.inquiry_delete').find('.check i').addClass('icon-checked');
                $('.inquiry_list ').find('.check i').addClass('icon-checked');
            }
        });
        //單選
        $('.inquiry_list ').find('.check').click(function() {
            var $this = $(this);
            if ($this.find('i').hasClass('icon-checked')) {
                $this.find('i').removeClass('icon-checked');
            } else {
                $this.find('i').addClass('icon-checked');
            }

        });
        $('.inquiry_list ').find('.check').click(function() {
            var inquiryLenght = $('.inquiry_list ').length;
            var icheckedLenght = $('.inquiry_list ').has('.icon-checked').length;

            if (inquiryLenght == icheckedLenght) {
                $('.inquiry_delete').find('.check i').addClass('icon-checked');
            } else {
                $('.inquiry_delete').find('.check i').removeClass('icon-checked');
            }
        });
    });
});