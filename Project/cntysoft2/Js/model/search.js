/**
 * Created by wangzan on 2016/4/9.
 */
define(['jquery'], function () {
    $(function () {
        $('.header_search i').on('click',function () {
            $(this).prev().addClass('input_unfold').animate({width: '180px'}, 300);
        });
    })
});