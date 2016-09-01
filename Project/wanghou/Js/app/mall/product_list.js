/**
 * Created by wangzan on 2016/1/8.
 */
define(['jquery','totop'], function () {

    $(document).ready(function () {
        //价格
        $('.sort').find('.price').click(function () {
            var $i=$(this).find('i');
            if($i.hasClass('down')){
                $i.html('&#xe614;');
                $i.removeClass('down');
            }else {
                $i.html('&#xe611;');
                $i.addClass('down');
            }
            return false;
        });

        $('.choose .selected i').click(function () {
        $(this).parent('li').remove();
        });
    });
});