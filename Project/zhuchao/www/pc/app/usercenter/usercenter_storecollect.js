/**
 * Created by wangzan on 2015/11/5.
 */
define(['jquery', 'fhlib/totop', 'fhlib/search', 'Core', 'Front'], function () {

   $(function () {
       $('.right_sort a').click(function () {
           var oIndex=$(this).index();
           $(this).addClass('now_site').siblings().removeClass('now_site');
            $('.collect_list').eq(oIndex).show().siblings().hide();
       })
   })
});