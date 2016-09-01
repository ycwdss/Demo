/**
 * Created by wangzan on 2016/1/19.
 */
define(['jquery','module/base'],function(){
    $(document).ready(function () {
        $('.order_item li a').click(function () {
            var $index=$(this).parent().index();
            $(this).addClass('main').parent().siblings().children().removeClass('main');
            $('.order').children().eq($index).show().siblings().hide();
            return false;
        });
    });
});