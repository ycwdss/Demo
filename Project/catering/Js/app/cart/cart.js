/**
 * Created by wangzan on 2016/1/10.
 */
define(['jquery','module/totop','module/recommend'], function () {
   $(document).ready(function () {
      //单个删除

      $('.operate_del').click(function () {
        var offbtn=$(this).closest('.cart_list').find('.check').hasClass('checked');
        var len=$('.cart_list').length;
         if(offbtn){
            $(this).closest('.cart_list').remove();
         }
         if(offbtn && len==1){
            $(this).closest('.cart_list').remove();
            $('.cart_title').find('.check').removeClass('checked main_bg main_border');
            $('.cart_empty').find('.check').removeClass('checked main_bg main_border');
         }
         getTotal();
         return false;

      });
      //清空选中操作
      $('.delete ').click(function () {
         $('.cart_list').each(function () {
            var $chk = $(this).find('.check')
            if ($chk.hasClass('checked')) {
               $(this).remove();
               $('.cart_title').find('.check').removeClass('checked main_bg main_border');
               $('.cart_empty').find('.check').removeClass('checked main_bg main_border');
            }
            getTotal();
            return false;
         });
      });
      //单选
      $('.cart_list .check').click(function () {
         var $this=$(this);
         if($this.hasClass('checked')){
            $this.removeClass('checked main_bg main_border')
         }else {
            $this.addClass('checked main_bg main_border')
         }
      });
      //单个选中 全选中
      $('.cart_list .check ').click(function () {
         var $chklenght=$('.cart_list').has('.checked').length;
         var $listlenght=$('.cart_box .cart_list').length;
         if($chklenght==$listlenght){
            $('.cart_title').find('.check').addClass('checked main_bg main_border');
            $('.cart_empty').find('.check').addClass('checked main_bg main_border');
         }else {
            $('.cart_title').find('.check').removeClass('checked main_bg main_border');
            $('.cart_empty').find('.check').removeClass('checked main_bg main_border');
         }
         getTotal();
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
         $(this).parents('.cart_list').find('.check').addClass('checked main_bg main_border');
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
         $(this).parents('.cart_list').find('.check').addClass('checked main_bg main_border');
         getTotal();
      });

      //数量改变
      $('.cart_list .num_text').keyup(function () {
         var val=$(this).val();
         var payUnit=$(this).closest('.cart_list ').find('.pro_price');
         if(!(parseInt(val)==val) || val<1){
            $(this).val(1);
         }
         var total=parseInt($(this).val())*parseFloat(payUnit.text());
         $(this).parents('.pro_num').siblings('.pro_total').text(total.toFixed(2));
         $(this).parents('.cart_list').find('.check').addClass('checked main_bg main_border');
         getTotal();
      });

      //全选
      $('.cart_title .check,.cart_empty .check').click(function () {
         var $this=$(this);
         if($this.hasClass('checked')){
            $('.cart_title .check,.cart_empty .check').removeClass('checked main_bg main_border')
            $('.cart_list').find('.check').removeClass('checked main_bg main_border');
         }else {
            $('.cart_title .check,.cart_empty .check').addClass('checked main_bg main_border')
            $('.cart_list').find('.check').addClass('checked main_bg main_border');
         }
         getTotal();
      });

      //总额
      function getTotal(){
         var unitPrice=0,totalMoney=0,num=0,totalNum=0;
         var $selected=$('.cart_list').find('.checked');
         $selected.each(function (index,$element) {
            unitPrice=$($element).closest('.cart_list').find('.pro_price').text();
            num=$($element).closest('.cart_list').find('.num_text').val();
            totalNum +=parseInt(num);
            totalMoney +=unitPrice*num;
         });
         $('.cart_pay').find('.pay_num').text(totalNum);
         $('.cart_pay').find('.pay_total').text(totalMoney.toFixed(2));
      }

   });
})