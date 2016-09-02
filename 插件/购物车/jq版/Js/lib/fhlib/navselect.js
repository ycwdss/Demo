/*
 * Cntysoft Cloud Software Team
 * 
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */
define(['jquery'],function(){
   $(function() {
      var skip=Array('最权威的建材信息','最精确的家装指南');
      $('#currentItem').click(
         function () {
            if ($('#searchItems').height() == 35) {
               $('#searchItems').css('height', '70px');
            }
            else {
               $('#searchItems').css('height', '35px');
            }
            $('.c_searchArrow').toggleClass('arrowNow');
         }
      );
      $('#currentItem').prev('i').click(
         function(){
            $('#currentItem').click();
         }
      );
      $('.c_notCurrent').click(function () {
         var clickItem = $(this).html();
         if(clickItem=='建材'){
            $('#search').attr('placeholder',skip[0]);
         }
         else{
            $('#search').attr('placeholder',skip[1]);
         }

         $(this).html($('#currentItem').html());
         $('#currentItem').html(clickItem);
         $('#searchItems').height('35px');
         $('.c_searchArrow').toggleClass('arrowNow');
      });
      $('#searchItems').mouseleave(function () {

         if ($('#searchItems').height() == 70) {
            $('#searchItems').height('35px');
            $('.c_searchArrow').toggleClass('arrowNow');

         }
      });
      $(window).scroll(function () {
//            alert($(window).scrollTop());
         if ($(window).scrollTop() > 0) {
//                alert("asfadf");
            $('.m_nav').addClass('navShadow');
         }
         else if ($(window).scrollTop() == 0) {
            $('.m_nav').removeClass('navShadow');
         }
      });
   });
});