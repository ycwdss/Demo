/**
 * Created by wangzan on 2016/1/26.
 */
define(['../zepto'],function(){
    $(document).ready(function () {
        $('.nav_btn').click(function () {
            if($(this).hasClass('active')){
                $('.nav').hide();
                $(this).removeClass('active');
            }else {
                $(this).addClass('active');
                $('.nav').show();
            }
            return false;
        });
        $('html,body').click(function () {
            $('.nav').hide();
            $('.nav_btn').removeClass('active');
        });
    });
});