/**
 * Created by wangzan on 2016/3/17.
 */
define(['jquery'], function() {
    $(function () {
        $('.message_delete').find('.check').click(function() {
            var $this = $(this);
            if ($this.find('i').hasClass('icon-checked')) {
                $('.message_delete').find('.check i').removeClass('icon-checked');
                $('.message_list ').find('.check i').removeClass('icon-checked');
            } else {
                $('.message_delete').find('.check i').addClass('icon-checked');
                $('.message_list ').find('.check i').addClass('icon-checked');
            }
        });
        //單選
        $('.message_list ').find('.check').click(function() {
            var $this = $(this);
            if ($this.find('i').hasClass('icon-checked')) {
                $this.find('i').removeClass('icon-checked');
            } else {
                $this.find('i').addClass('icon-checked');
            }

        });
        $('.message_list ').find('.check').click(function() {
            var messageLenght = $('.message_list ').length;
            var icheckedLenght = $('.message_list ').has('.icon-checked').length;

            if (messageLenght == icheckedLenght) {
                $('.message_delete').find('.check i').addClass('icon-checked');
            } else {
                $('.message_delete').find('.check i').removeClass('icon-checked');
            }
        });
    });
});