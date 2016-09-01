/*
 * Cntysoft Cloud Software Team
 * 
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */
define(['jquery','fhlib/totop','fhlib/navselect','fhlib/search','lazyload','fhlib/imglazy'],function(){
   $(function () {
      var slideDown = true;
      $("#search").keyup(
         function () {
            if (13 == event.keyCode && $(this).val()) {
               var key = $(this).val()
               window.location.href = '/query/' + Cntysoft.toQueryString({'keyword': key}, true);
            }
         }
      );

      $('#searchClick').click(function () {
         if ($("#search").val() !== "") {
            var key = $("#search").val()
            window.location.href = '/query/' + Cntysoft.toQueryString({'keyword': key}, true);
         }
      });
      $(".c_navName").click(function () {
         if (slideDown) {
            slideDown = false;
            $(this).toggleClass("currentSpan").siblings(".c_navName").removeClass("currentSpan");
            $(this).next(".nav_name").slideToggle(200).siblings(".nav_name").slideUp(300);
            setTimeout(function () {
               slideDown = true;
            }, 300);
         }
      });
      if(0==$('.now_node').length){
         $('.c_navName').first().click();
      }
      if($('.now_node').parents('.nav_name').length){
         var nowNav=$('.now_node').parents('.nav_name');
         nowNav.show();
         nowNav.prev('.c_navName').addClass('currentSpan').siblings(".c_navName").removeClass("currentSpan");
      }
      $('.now_node').closest('.nav_name>li').children('a').addClass('current');
      $('.now_node').closest('.c_navName').click();
      $(".nav_name>li").mouseenter(function () {
         $(this).find("a").addClass("current");
//         $(this).siblings(a).find("a").removeClass("current");
      }).mouseleave(function () {
         if(!$(this).hasClass('now_node') && !($(this).find('.now_node')).length) {
            $(this).children("a").removeClass("current");
         }
      });
      $(".l_navBox").find("#Raiders>li").hover(function () {
         $(this).addClass("current");
         $(this).siblings().removeClass("current");
         $(this).find(".m_navList").show();
      }, function () {
         $(this).find(".m_navList").hide();
      });
//R_m_nav
      $("#Raiders").find("li").mouseenter(function () {
         $(this).addClass("current");
         $(this).siblings().removeClass("current");
      });
   })
})