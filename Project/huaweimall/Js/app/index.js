/**
 * Created by wangzan on 2015/12/9.
 */
define(['jquery','../model/head','../model/totop','slick'],function(){

   $(document).ready(function () {
      //���������ȡ����
      $('.top_banner i').click(function () {
         $('.top_banner').hide();
      });
     //�ȵ�ͼ�ֲ�
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
      //��Ʒ�����Ҳ��ֲ�
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
      //���Ź����л�
      $('.hf_news .hd ul li').hover(function () {
         $(this).addClass('current').siblings().removeClass('current');
         $('.hf_news .bd .tab').eq($(this).index()).show().siblings().hide();
      });
      //�м�bannerͼ
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
      //�ײ����ؿͻ�����ʾ��ά��
      $('.contact_soft ul li').eq(3).hover(function () {
         $(this).find('.down_soft').show();
      }, function () {
         $(this).find('.down_soft').hide();
      })
   })
});