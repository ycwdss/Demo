/**
 * Created by wangzan on 2016/1/11.
 */
define(['jquery','module/totop','module/drop'], function () {
    $(document).ready(function () {
        //删除收货地址
        $('.del_addr').click(function(e){
            $('.msg_tip').hide();
            $(this).find('.msg_tip').show();
            e.stopPropagation();
        });
        $('.del_msg').click(function(){
            $(this).parents('.addr_ele').remove();
        });
        $('.cancel_del').click(function(e){
            $(this).parents('.msg_tip').hide();
            e.stopPropagation();
        });
        $('html,body').click(function(){
            $('.msg_tip').hide();
        });
        /*
        * 新增收货地址
        * */
        $('.new_addr_btn').click(function(){
            $('.new_addr').show();
        });
        $('.addr_cancel').click(function(){
            $('.new_addr').hide();
        });
        //使用优惠券
        $('.coupon_container input').focus(function(e){
            $('.coupon_list ').show();
            e.stopPropagation();
        });
        $('.coupon_container input').click(function(e){
            e.stopPropagation();
        });
        $('.coupon_list li').click(function(){
            $('.coupon_container input').val( $(this).html());

        });
        $('body,html').click(function(){
            $('.coupon_list').hide();
        });
        //加
        $('.add').click(function () {
            var $value = $(this).prev('input');
            $value.val(+$value.val()+1);
            var payUnit=$(this).closest('.cart_list ').find('.pro_price');
            if(!$.isNumeric($value.val()) || $value.val()<1){
                $value.val(1);
            }

            var total=parseInt($value.val())*parseFloat(payUnit.text());
            $(this).parents('.pro_num').siblings('.pro_total').text(total.toFixed(2));
            getTotal();
        });
        //减号
        $('.min').click(function () {
            var $value = $(this).next('input');
            $value.val($value.val()-1);
            var payUnit=$(this).closest('.cart_list ').find('.pro_price');
            if(!$.isNumeric($value.val()) || $value.val()<1){
                $value.val(1);
            }

            var total=parseInt($value.val())*parseFloat(payUnit.text());
            $(this).parents('.pro_num').siblings('.pro_total').text(total.toFixed(2));
            getTotal();
        });

        //数量改变
        $('.cart_list .num_text').keyup(function () {
            var val=$(this).val();
            val = val.replace(/[^\d]/g,'');
            if(val == ""){
                val =1;
            }
            if(val > parseInt($(this).parents('.num_box').siblings('p').find('i').html())){
                val = $(this).parents('.num_box').siblings('p').find('i').html();
            }
            $(this).val(val);
            var payUnit=$(this).closest('.cart_list ').find('.pro_price');
            //if(!$.isNumeric(val) || val<1){
            //   $(this).val(1);
            //}

            var total=parseInt($(this).val())*parseFloat(payUnit.text());
            $(this).parents('.pro_num').siblings('.pro_total').text(total.toFixed(2));
            $(this).parents('.cart_list').find('.check').addClass('checked main_bg main_border');
            getTotal();
        });


        //总额
        function getTotal(){
            var unitPrice=0,totalMoney=0,num=0;
            var $selected=$('.cart_list');
            $selected.each(function (index,$element) {
                unitPrice=$($element).closest('.cart_list').find('.pro_price').text();
                num=$($element).closest('.cart_list').find('.num_text').val();
                totalMoney +=unitPrice*num;
            });
            $('.cart_pay').find('.pay_num').text(num);
            $('.cart_pay').find('.pay_total').text(totalMoney.toFixed(2));
        }

    });
});