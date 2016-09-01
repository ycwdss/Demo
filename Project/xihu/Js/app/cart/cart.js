/**
 * Created by jiayin on 2016/2/19.
 */
define(['jquery','module/base','module/recommend'], function () {
    $(function () {
        //加
        $('.t_add').click(function () {
            var $value = $(this).prev('input');
            $(this).closest('.good_items').find('.checkbox').addClass('main_bg');
            $value.val(+$value.val()+1);
            $('.t_num').keyup();
        });
        //减号
        $('.t_minus').click(function () {
            var $value = $(this).next('input');
            $(this).closest('.good_items').find('.checkbox').addClass('main_bg');
            $value.val($value.val()-1);
            $('.t_num').keyup();
        });
        //数量改变
        $('.t_num').keyup(function () {
            var val=$(this).val();
            if(!$.isNumeric(val) || val<1){
                $(this).val(1);
            }
        });


    });
});

