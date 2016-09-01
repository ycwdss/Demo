/**
 * Created by wangzan on 2016/1/18.
 */
define(['jquery', 'totop','qrcode','module/qrcode'], function () {
    $(document).ready(function () {
      $('.coupons_sort li a').click(function () {
          var $this=$(this).parent().index();
        $(this).addClass('main main_border').parent().siblings().children().removeClass('main main_border');
          $('.coupons_wrap ').children().eq($this).show().siblings().hide();
      });
    });
});