/*
 * Cntysoft Cloud Software Team
 * 
 * @author Shuai <ln6265431@163.com>
 * @copyright  Copyright (c) 2010-2015 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   http://www.cntysoft.com/license/new-bsd     New BSD License
 */
//
define(function(require) {
   require('jquery');
   require('slick');
   require('fhlib/totop');
   require('lazyload');
   require('fhlib/search');
   require('fhlib/navselect');
   require('fhlib/imglazy');
   $(function () {
      var classlist = $('#classlist');
      $(classlist).find('.classlist_items').removeClass('current');
      $(classlist).find('.classlist_items').mouseenter(function () {
         var indexA = $(this).index();
         $(this).addClass('current');
         $(this).siblings().removeClass('current');
         $(this).parents('#classlist').next('.classlist_right').children('.classlist_right_list').hide();
         $(this).parents('#classlist').next('.classlist_right').children('.classlist_right_list').eq(indexA).show();
         return false;
      });
      $('.classlist_right').mouseleave(function () {
         $(this).prev('#classlist').children('.classlist_items').removeClass('current');
         $(this).children('.classlist_right_list').hide();
      });
      $('.classlist_box').mouseleave(function () {
         $(this).find('.classlist_items').removeClass('current');
         $(this).find('.classlist_right_list').hide();
      });
      //焦点图
      $(".mall_bannerimg").slick(
          {
             slidesToShow: 1,
             autoplay: true,
             Speed:1000,
             arrows: true,
             dots: true,
             fade:true,
             dotsClass: 'banner_downbtn',
             prevArrow: '.banner_leftbtn',
             nextArrow: '.banner_rightbtn'
          });

      //var DivHeight =$(".c_navName").height() + $(".c_navName").next().height();
      //$(".c_navName").click(function () {
      //   $(this).toggleClass("currentSpan").siblings(".c_navName").removeClass("currentSpan");
      //   $(this).next(".nav_name").slideToggle(300).siblings(".nav_name").slideUp(500)
      //
      //});
      //$(".nav_name>li").mouseenter(function () {
      //   $(this).find("a").addClass("current");
      //   $(this).siblings().find("a").removeClass("current");
      //}).mouseleave(function () {
      //   $(".nav_name>li").children("a").removeClass("current");
      //})
//攻略首页
      $(".l_navBox").find("#Raiders>li").hover(function () {
         $(this).addClass("current");
         $(this).siblings().removeClass("current");
         $(this).find(".m_navList").show();
      }, function () {
         $(this).find(".m_navList").hide();
      });

      var text = $(".c_strTit");
      var currentTit = "";
      $(".l_xcscRight").find(".m_xcscTit").hover(function () {
         currentTit = $(this).find(".c_strTit").html();
         $(this).find(".c_strTit").html("");
         $(this).find(".m_strNav").fadeIn();
      }, function () {
         $(this).find(".c_strTit").html(currentTit);
         $(this).find(".m_strNav").hide();
      })

//R_m_nav

      $("#Raiders").find("li").mouseenter(function () {
         $(this).addClass("current");
         $(this).siblings().removeClass("current");
      });

      $(".l_navBox").find("#Raiders>li").hover(function () {
         var index = $(this).index();
         $(this).addClass("current");
         $("#str_nav").children().hide();
         $(this).siblings().removeClass("current");
         $("#str_nav").children().eq(index).css({"display": "block"});
      }, function () {
         $("#str_nav").children().hide();
      });
   });
})