/*
 * Cntysoft Cloud Software Team
 * 
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */
define(['jquery','fhlib/navselect','fhlib/totop','fhlib/search','Core','Front'],function(){
   $(function(){
      show();
      $('window').scrollTop('0');
      function show(){
         var link=window.location.hash;
         hide();
         $(link).addClass('c_list_bg');
         $(link+1).show();
      }
      $('#footer a').click(function(){
         location.reload();
         $('window').scrollTop('0');
      });
      $('.c_list').click(function(){
         hide();
         var n= $.inArray(this,$('.c_list'));
         $('.c_list').eq(n).addClass('c_list_bg');
         $('.right_elem').eq(n).show();
      });
      function hide(){
         $('.c_list').removeClass('c_list_bg');
         $('.right_elem').hide();
      }
   });
});