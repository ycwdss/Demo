/**
 * Created by wangzan on 2016/1/10.
 */
define(['jquery','module/totop','module/recommend'], function () {
   $(document).ready(function () {
      //删除操作
      $('.list_delete').click(function () {
         var $icon=$(this).parents('.list_items').find('.icon_checkbox');
         if($icon.hasClass('checked')){
            $(this).parents('.list_items').remove();
         }
         return false;
      });
      $('.delete ').click(function () {
         $('.list_items').each(function () {
            var $chk=$(this).find('.icon_checkbox')
            if ($chk.hasClass('checked')){
               $(this).remove();
            }
         });
         var $chklenght=$('.list_items').length;
         if($chklenght==0){
            $('#selectAll').removeClass('checked');
         }
         getTotal();
      });
      //单选
      $('.list_items .icon_checkbox').click(function () {
         var $this=$(this);
         if($this.hasClass('checked')){
            $this.removeClass('checked')
         }else {
            $this.addClass('checked')
         }
      });
      //单个选中 全选中
      $('.list_items .icon_checkbox ').click(function () {
         checkAll();
         getTotal();
      });
      //全选中
      function checkAll(){
         var $chklenght=$('.list_items').has('.checked').length;
         var $listlenght=$('.list_items').length;
         if($chklenght==$listlenght){
            $('#selectAll').addClass('checked');
         }else {
            $('#selectAll').removeClass('checked');
         }
      };
      //加
      $('.add').click(function () {
         var $value = $(this).prev('input');
         $(this).closest('.list_items').find('.icon_checkbox').addClass('checked');
         $value.val(+$value.val()+1);
         $('.list_num .text').keyup();
      });
      //减号
      $('.min').click(function () {
         var $value = $(this).next('input');
         $(this).closest('.list_items').find('.icon_checkbox').addClass('checked');
         $(this).closest('.list_items').find('.main_bg_opacity').show();
         $value.val($value.val()-1);
         $('.list_num .text').keyup();
      });
      //数量改变
      $('.list_num .text').keyup(function () {
         var val=$(this).val();
         var payUnit=$(this).closest('.list_items ').find('.list_promotion em');
         if(!$.isNumeric(val) || val<1){
            $(this).val(1);
         }
         var total=parseInt($(this).val())*parseFloat(payUnit.text());
         $(this).parents('.list_num').next().children('em').text(total.toFixed(2));
         getTotal();
         checkAll();
      });
      //全选
      $('#selectAll').click(function () {
         var $this=$(this);
         if($this.hasClass('checked')){
            $this.removeClass('checked')
            $('.list_content').find('.icon_checkbox').removeClass('checked');
            $('.list_content').find('.list_items .main_bg_opacity').hide();
         }else {
            $this.addClass('checked');
            $('.list_content').find('.icon_checkbox').addClass('checked');
            $('.list_content').find('.list_items .main_bg_opacity').show();
         }
         getTotal();
      });

      //总额
      function getTotal(){
         var sale=0,discount=0,total=0;
         var $selected=$('.list_items').has('.checked');
         $selected.each(function (index,$element) {
            var salePrice=$($element).closest('.list_items').find('.list_sale em').text();
            var totalPrice=$($element).closest('.list_items').find('.list_promotion em').text();
            var discountPrice=salePrice-totalPrice;
            var num=$($element).find('.text').val();
            sale +=salePrice*num;
            discount +=discountPrice*num;
            total +=totalPrice*num;
         });
         $('.no_discount').find('b').text(sale.toFixed(2));
         $('.discount').find('b').text(discount.toFixed(2));
         $('.after_discount').find('b').text(total.toFixed(2));
      }
      //hover
      $('.list_content').find('.list_items').hover(function () {
         $(this).find('.main_bg_opacity').show();
      }, function () {
         if($(this).find('.icon_checkbox').hasClass('checked')){
            $(this).find('.main_bg_opacity').show();
         }else {
            $(this).find('.main_bg_opacity').hide();
         };

      });
   });
})