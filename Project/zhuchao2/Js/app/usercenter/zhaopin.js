/**
 * Created by wangzan on 2016/3/17.
 */
define(['jquery'], function() {
    $(function () {
        $('.recruit_delete').find('.check').click(function() {
            var $this = $(this);
            if ($this.find('i').hasClass('icon-checked')) {
                $('.recruit_delete').find('.check i').removeClass('icon-checked');
                $('.recruit_list ').find('.check i').removeClass('icon-checked');
            } else {
                $('.recruit_delete').find('.check i').addClass('icon-checked');
                $('.recruit_list ').find('.check i').addClass('icon-checked');
            }
        });
        //單選
        $('.recruit_list ').find('.check').click(function() {
            var $this = $(this);
            if ($this.find('i').hasClass('icon-checked')) {
                $this.find('i').removeClass('icon-checked');
            } else {
                $this.find('i').addClass('icon-checked');
            }

        });
        $('.recruit_list ').find('.check').click(function() {
            var recruitLenght = $('.recruit_list ').length;
            var icheckedLenght = $('.recruit_list ').has('.icon-checked').length;

            if (recruitLenght == icheckedLenght) {
                $('.recruit_delete').find('.check i').addClass('icon-checked');
            } else {
                $('.recruit_delete').find('.check i').removeClass('icon-checked');
            }
        });
    });
});