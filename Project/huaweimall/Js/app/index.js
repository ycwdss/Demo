/**
 * Created by wangzan on 2015/12/9.
 */
define(['jquery','../model/head','../model/totop','slick'],function(){

   $(document).ready(function () {
      //顶部广告点击取消掉
      $('.top_banner i').click(function () {
         $('.top_banner').hide();
      });
     //热点图轮播
      $('.hot_box').slick({
         dots:true,
         arrows:false,
         infinite: true,
         fade:true,
         draggable:false,
         speed:500,
         autoplay: true,
         dotsClass:'slider_dots'
      });
      //新品热卖右侧轮播
      $('.hf_box').slick({
         dots:false,
         arrows:true,
         infinite: true,
         draggable:false,
         speed:500,
         autoplay: true,
         prevArrow:'.left_btn',
         nextArrow:'.right_btn'
      });
      //新闻公告切换
      $('.hf_news .hd ul li').hover(function () {
         $(this).addClass('current').siblings().removeClass('current');
         $('.hf_news .bd .tab').eq($(this).index()).show().siblings().hide();
      });
      //中间banner图
      $('.banner_box').slick({
         dots:true,
         arrows:false,
         infinite: true,
         fade:true,
         draggable:false,
         speed:500,
         autoplay: true,
         dotsClass:'slider_dots'
      });
      //底部下载客户端显示二维码
      $('.contact_soft ul li').eq(3).hover(function () {
         $(this).find('.down_soft').show();
      }, function () {
         $(this).find('.down_soft').hide();
      })
   })
});