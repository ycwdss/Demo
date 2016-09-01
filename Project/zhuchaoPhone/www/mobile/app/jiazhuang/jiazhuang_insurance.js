/**
 * Created by Administrator on 2015/11/24.
 */
define(['app/jiazhuang/jiazhuang_index','swiper','fhlib/new_totop'], function () {
   $(function(){

       $('.sort span').click(function(){
           var n= $.inArray(this,$('.sort span'));
            $('.sort span').removeClass('sort_current');
           $(this).addClass('sort_current');
           $('.sort_ele').hide();
           $('.sort_ele').eq(n).show();
           var swiper = new Swiper('.m_swiper',{
               pagination: '.swiper-pagination',
               slidesPerView : 2,
               spaceBetween: 10
           });
       });
   })
});