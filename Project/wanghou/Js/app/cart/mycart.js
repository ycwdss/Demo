/**
 * Created by wangzan on 2016/1/10.
 */
define(['jquery','totop'], function () {
   $(document).ready(function () {
      //删除操作
      $('.delete ').click(function () {
         $('.list_items').each(function () {
            var $chk=$(this).find('.icon_checkbox')
            if ($chk.hasClass('current checked')){
               $(this).remove();
            }
         });
         var $chklenght=$('.list_items').length;
         if($chklenght==0){
            $('#selectAll').removeClass('current checked');
         }
         getTotal();
      });
      //单选
      $('.list_items .icon_checkbox').click(function () {
         var $this=$(this);
         if($this.hasClass('current checked')){
            $this.removeClass('current checked')
         }else {
            $this.addClass('current checked')
         }
      });
      //单个选中 全选中
      $('.list_items .icon_checkbox ').click(function () {
         var $chklenght=$('.list_items').has('.checked').length;
         var $listlenght=$('.list_items').length;
         if($chklenght==$listlenght){
            $('#selectAll').addClass('current checked');
         }else {
            $('#selectAll').removeClass('current checked');
         }
         getTotal();
      });
      //加
      $('.add').click(function () {
         var $value = $(this).prev('input');
         $(this).closest('.list_items').find('.icon_checkbox').addClass('current checked');
         $value.val(+$value.val()+1);
         $('.list_num .text').change();
      });
      //减号
      $('.min').click(function () {
         var $value = $(this).next('input');
         $(this).closest('.list_items').find('.icon_checkbox').addClass('current checked');
         $value.val($value.val()-1);
         $('.list_num .text').change();
      });
      //数量改变
      $('.list_num .text').change(function () {
         var val=$(this).val();
         var payUnit=$(this).closest('.list_items ').find('.list_promotion em');
         if(!$.isNumeric(val) || val<1){
            $(this).val(1);
         }
         var total=parseInt($(this).val())*parseFloat(payUnit.text());
         $(this).parents('.list_num').next().children('em').text(total.toFixed(2));
         getTotal();
      });
      //全选
      $('#selectAll').click(function () {
         var $this=$(this);
         if($this.hasClass('checked')){
            $this.removeClass('current checked')
            $('.list_content').find('.icon_checkbox').removeClass('current checked');
         }else {
            $this.addClass('current checked');
            $('.list_content').find('.icon_checkbox').addClass('current checked');
         }
         getTotal();
      });

      //总额
      function getTotal(){
         var shopSum=0,discountSum=0,paySum=0;
         var $selected=$('.list_items').has('.checked');
         $selected.each(function (index,$element) {
            var payPrice=$($element).closest('.list_items').find('.list_promotion em').text();
            var shopPrice=$($element).closest('.list_items').find('.list_sale em').text();
            var discountPrice=$($element).closest('.list_items').find('.list_discount em').text();
            var num=$($element).find('.text').val();
            shopSum +=shopPrice*num;
            discountSum +=discountPrice*num;
            paySum += payPrice*num;

         });
         $('.no_discount').find('b').text(shopSum.toFixed(2));
         $('.discount').find('b').text(discountSum.toFixed(2));
         $('.after_discount').find('b').text(paySum.toFixed(2));
      }
   });
})