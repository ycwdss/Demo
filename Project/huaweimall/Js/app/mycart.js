/**
 * Created by wangzan on 2015/12/17.
 */

define(['jquery','../model/head','../model/totop'],function(){

    $(function(){
        //操作删除
        $('.pro_opration a i').click(function(){
            $(this).closest('.cart_table').remove();
            getTotal();
        });
        $('.delete').click(function () {
            $('.cart_table').each(function () {
                var $ipt=$(this).find('.pro_check input');
                if($ipt.prop('checked')){
                    $(this).remove();
                }
            });
            getTotal();
        });

        $('.cart_table .pro_check input').click(function(){
            var iptlenght=$('.cart_table').has('.pro_check input:checked').length;
            var cartlenght=$('.cart_table').length;
           if(iptlenght==cartlenght){
               $('.select_all').prop('checked',true);
           }else{
               $('.select_all').prop('checked',false);
           }
            getTotal();
        });

        $('.add').click(function () {
            var $value = $(this).prev('input');
            var $ipt=$(this).closest('.cart_table').find('.pro_check input');
            $ipt.prop('checked',true);
            $value.val(+$value.val()+1);
            $('.pro_num input').change();
        });
        $('.min').click(function () {
            var $value = $(this).next('input');
            $(this).closest('.cart_table').find('.cart_table .pro_check input').prop('checked',true);
            $value.val(+$value.val()-1);
            $('.pro_num input').change();
        });

        $('.pro_num input').change(function(){
            var val = $(this).val();
            var $unit=$(this).closest('.cart_table').find('.pro_unit em');
            if(!$.isNumeric(val) || val<1){
                $(this).val(1);
            }
            var total=parseInt($(this).val())*parseFloat($unit.text());
            $(this).parents('.pro_num').next().children('em').text(total.toFixed(2));
            getTotal();
        });

        $('.select_all').click(function(){
            if($(this).prop('checked')){
                $('.cart_table .pro_check input,.select_all').prop('checked',true);
            }
            else{
                $('.cart_table .pro_check input,.select_all').prop('checked',false);
            }
            getTotal();
        });


        function getTotal(){
           var $selected = $('.cart_table').has('.pro_check input:checked');
            var sum = 0;
            $selected.each(function(index,$element){
                var price = $($element).find('.pro_unit em').html();
                var num = $($element).find('.pro_num input').val();
                sum += price*num;
            });
            $('.total_price b').text(sum.toFixed(2));
            $('.sum').text(sum.toFixed(2));
        }
    });

});
