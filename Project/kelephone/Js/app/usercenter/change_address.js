/**
 * Created by Administrator on 2016/1/4.
 */
define(['zepto'],function(){
   $(function(){
      $('.local').click(function(){

        $('.local_detail').show();
          //loadProvince();
          $('body,html').addClass('show_local');
      });
       $('.choose').click(function(){
           if($(this).hasClass('chosen')){
               $(this).removeClass('chosen mainbgcolor');
           }else{
               $(this).addClass('chosen mainbgcolor');
           }
       });
       //$('.province li').click(function(){
       //    $('.city .local_title h3').html($(this).html());
       //    $('.province').hide();
       //    $('.city').show();
       //});
       //$('.province .go_back').click(function(){
       //    $('.local_detail').hide();
       //    $('body,html').removeClass('show_local');
       //});
       //$('.city li').click(function(){
       //    $('.area .local_title h3').html($(this).html());
       //    $('.city').hide();
       //    $('.area').show();
       //});
       //$('.city .go_back').click(function(){
       //    $('.city').hide();
       //    $('.province').show();
       //});
       //$('.area li').click(function(){
       //    $('.area').hide();
       //    $('.province').show();
       //    $('.local_detail').hide();
       //    $('body,html').removeClass('show_local');
       //    $('.local input').val($('.city .local_title h3').html()+$('.area .local_title h3').html()+$(this).html());
       //});
       //$('.area .go_back').click(function(){
       //    $('.area').hide();
       //    $('.city').show();
       //});
       //function loadProvince() {
       //    $.ajax({
       //        url: "../../city.json",
       //        cache: false,
       //        success: function (data) {
       //            var all= data?data:" ";
       //            var province_length = all['province'].length;
       //            var outer = "";
       //            var no_border = "";
       //           for(var i = 0;i<province_length;i++){
       //               if(i == province_length-1){
       //                   no_border = "no_borderB"
       //               }
       //               outer+="<li class="+no_border+">"+all['province'][i]['name']+"</li>";
       //           }
       //            $('.province ul').html(outer);
       //        }
       //    });
       //    $('.province').siblings('.local_title').click(function(){
       //        $('.local_detail').hide();
       //    });
       //};
   })
});