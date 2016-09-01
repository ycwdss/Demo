/**
 * Created by wangzan on 2016/3/17.
 */
define(['jquery'], function() {
    $(function () {
        $('.news_delete').find('.check').click(function() {
            var $this = $(this);
            if ($this.find('i').hasClass('icon-checked')) {
                $('.news_delete').find('.check i').removeClass('icon-checked');
                $('.news_list ').find('.check i').removeClass('icon-checked');
            } else {
                $('.news_delete').find('.check i').addClass('icon-checked');
                $('.news_list ').find('.check i').addClass('icon-checked');
            }
        });
        //單選
        $('.news_list ').find('.check').click(function() {
            var $this = $(this);
            if ($this.find('i').hasClass('icon-checked')) {
                $this.find('i').removeClass('icon-checked');
            } else {
                $this.find('i').addClass('icon-checked');
            }

        });
        $('.news_list ').find('.check').click(function() {
            var newsLenght = $('.news_list ').length;
            var icheckedLenght = $('.news_list ').has('.icon-checked').length;

            if (newsLenght == icheckedLenght) {
                $('.news_delete').find('.check i').addClass('icon-checked');
            } else {
                $('.news_delete').find('.check i').removeClass('icon-checked');
            }
        });
    });
});