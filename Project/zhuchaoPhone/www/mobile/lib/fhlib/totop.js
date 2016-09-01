/*
 * Cntysoft Cloud Software Team
 * 
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */
define(['jquery'],function(){
   $(function () {
      $.fn.manhuatoTop = function (options) {
         var defaults = {
            showHeight: 150,
            speed: 1000
         };
         var options = $.extend(defaults, options);
         $("body").prepend("<div id='totop'><a></a></div>");
         var $toTop = $(this);
         var $top = $("#totop");
         var $ta = $("#totop a");
         var scrolltop = $(window).scrollTop();
         if (scrolltop >= options.showHeight) {
            $top.show();
         }
         $toTop.scroll(function () {
            var scrolltop = $(this).scrollTop();
            if (scrolltop >= options.showHeight) {
               $top.show();
            }
            else {
               $top.hide();
            }
         });
         $top.click(function () {
            $("html,body").animate({scrollTop: 0}, options.speed);
         });
      }
   });
   $(function(){
      $(window).manhuatoTop({
         showHeight: 500,//设置滚动高度时显示
         speed: 500 //返回顶部的速度以毫秒为单位
      });
   })
})