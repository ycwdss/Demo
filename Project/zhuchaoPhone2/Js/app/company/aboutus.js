/**
 * Created by Administrator on 2016/3/17.
 */
define(['zepto','module/company_classify','module/totop'],function() {
    $(function () {

       $('.module_title').not('.about_us').click(function () {
           if($(this).hasClass('active')){
               $(this).next().hide();
               $(this).removeClass('active');
           }else {
               $(this).next().show();
               $(this).addClass('active');
           }

       });
          
    });
})