/*
 * Cntysoft Cloud Software Team
 *
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */
define(['jquery','slick','fhlib/search','fhlib/totop',
   'lazyload','fhlib/imglazy','fhlib/navselect','fhlib/form'], function () {
   //var tip = new Array('搜索你需要的建材','搜索您需要的建材攻略','搜索您喜欢的效果美图');
   //$("#searchArea a").click(
   //   function () {
   //      $(this).siblings('a').removeClass('current');
   //      $(this).addClass('current');
   //      var i=$('#searchArea a').index(this);
   //      $('#search').attr('placeholder',tip[i]);
   //   }
   //);

   $("#bannerBox").slick(
       {
          speed: 500,
          slidesToShow: 1,
          autoplaySpeed: 3000,
          arrows: true,
          dots: false,
          lazyLoad: 'ondemand',
          prevArrow: '.banner_leftbtn',
          nextArrow: '.banner_rightbtn'
       });


   $(document).ready(function(){
      var nav=$('#jiancai_nav');
      $(nav).find("li:first-child").addClass("current");
      $(nav).find('li').mouseenter(function () {
         var indexA=$(this).index();
         $(this).addClass("current");
         $(this).siblings().removeClass('current');
         $(this).parents().next('#jiancai_brand_items').children('div').hide();
         $(this).parents().next('#jiancai_brand_items').children('div').eq(indexA).show();
         return false;
      });
         //二维码隐藏
      $('#offbtn').click(function(){
         $('.erweima_block').hide();
         $('#openbtn').animate({'right':'0px'},300)
      });
      //二维码显示
      $('#openbtn').click(function(){
         $('#openbtn').animate({'right':'-42px'},300);
         $('.erweima_block').show();
      })
   });

   $("#focus_box").slick(
       {
          speed: 500,
          slidesToShow: 1,
          autoplaySpeed: 3000,
          arrows: true,
          dots: true,
          dotsClass:'zxxgt_bottom_btn',
          prevArrow: '.zxxgt_leftbtn',
          nextArrow: '.zxxgt_rightbtn'
       });

});