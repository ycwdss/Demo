
/**
 * Created by Administrator on 2015/10/7.
 */
define(['jquery','fhlib/search','fhlib/totop',
    'lazyload','fhlib/imglazy','fhlib/navselect'],function(){
$(function(){
    $('.case_sort li').click(function(){
       $(this).siblings('li').find('input').attr('checked',false);
    });
    $('.upload_button').click(function(){
        $('.upload_img').eq($.inArray(this,$('.upload_button'))).click();
    });
    $('.edit').click(function(){
        var intro_text=$(this).siblings('.intro').find('.intro_text');
        if(intro_text.height()>37){
            $('.edit').val('编辑');
            intro_text.animate({'height':'37px'},200);
        }
        else{
            $(this).val('确定');
            intro_text.animate({'height':'142px'},200);
        }
    });
    $('.location_list').click(function(){
        if($(this).height()>37){
            $(this).css({'height':'37px'});
            $(this).parent('.location').find('.arrowdown').removeClass('arrowup');
        }
        else{
            $(this).css({'height':$(this).find('ul').height()+1+'px'});
            $(this).parent('.location').find('.arrowdown').addClass('arrowup');
        }
    });
    $('.location_list li').click(function(){
           if($(this).parents('.location_list').height()>37){
               var n=$(this).siblings('li').eq(0).html();
               $(this).siblings('li').eq(0).html($(this).html());
               $(this).html(n);
           }
    });
    $('.arrow_container').click(function(){
        $(this).siblings('.location_list').click();
    });
    $('.del_case').click(function(){
        $(this).parents('.upload_ele').remove();
    });
    $('.del').click(function(){
        $(this).parents('.c_case').remove();
    });
});
});