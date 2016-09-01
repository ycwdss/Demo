/**
 * Created by wangzan on 2015/12/19.
 */
define(['jquery','model/head','model/totop'],function(){

    $(document).ready(function () {

        $('.star li').hover(function () {
            //$(this).toggleClass('current');
            $(this).nextAll().addClass('current');
            if($(this).hasClass('current')){
                $(this).removeClass('current');
                $(this).prevAll().removeClass('current');
            }
            $('.score').text($(this).attr('title'));
        });
        //标签
     /*   $('.tag li').live('click',function () {
           $(this).toggle(function () {
               var len=$(this).siblings('.current').length;
               $(this).addClass('current');
               if(len>4){
                   $('.tip_one').show();
               }
           }, function () {
               var len=$(this).siblings('.current').length;
               $(this).removeClass('current');
               if(len<=5){
                   $('.tip_one').hide();
               }
           });
        });
        $(".tag li").not('.diy').trigger('click');*/
        $('.tag li').not('.diy').click(function () {
            if($(this).hasClass('current')){
                $(this).removeClass('current');
                var len=$(this).siblings('.current').length;
                if(len<=5){
                    $('.tip_one').hide();
                }
            }else{
                $(this).addClass('current');
                var len=$(this).siblings('.current').length;
                if(len>4){
                    $('.tip_one').show();
                }
            }
        });
        //自定义
        $('.diy').click(function () {
            $('.diy_text').hide();
            $('.diy_edit').show();
        });
        $('.diy_edit em').click(function () {
            var num=$(this).prev().val().length;
            var value=$(this).prev().val();
            if(num>=6){
                $('.tip_two').show().children('span').text('标签不可以超过6个汉字~');
            }else
            if(value==''){
                $('.tip_two').show().children('span').text('标签不可以为空~');
            }
            else{
                $('.tip_two').hide();
                $('.diy').before('<li class="current"><a class="txt" href="javascript:;"></a><i></i></li>').prev().children('.txt').text(value);
                $(this).prev().val('');
                var len=$('.diy').siblings('.current').length;
                if(len>5){
                    $('.tip_one').show();
                }
            }
        });

        //评价字符多少
        $('.txt_container').each(function () {
           var length=$(this).val().length;
            $(this).next().children('em').html(length); //显示字符个数
            $(this).keyup(function(){
                var new_length = $(this).val().length;
                $(this).next().children('em').html(new_length);
                if (new_length>=500) {
                    $('.tip_three').show();
                }else
                {
                    $('.tip_three').hide();
                }
            });
        });
    });

});