/*
 * Cntysoft Cloud Software Team
 * 
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */
define(['jquery','lazyload'],function(){
   $(function(){
      $(".lazy").lazyload({
         threshold: 10,
         effect: "fadeIn",
         placeholder: "/Statics/Skins/Images/pc/lazyicon.png"
      });

   })
})