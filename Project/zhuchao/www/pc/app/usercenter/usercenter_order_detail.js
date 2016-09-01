/**
 * Created by guan on 2015/11/3.
 */
//展开物流详情
$(function(){
  $('.shouqi').click(function(){
    $('.order_delivery_detail').slideToggle('slow');
      if($('.shouqi').find('a').html()=='展开物流详情'){
          $('.shouqi').find('a').html('收起物流详情');
      }
          else{
          $('.shouqi').find('a').html('展开物流详情');
      }
  });
});