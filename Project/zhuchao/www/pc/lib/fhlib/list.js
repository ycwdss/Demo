/**
 * Created by Administrator on 2015/10/21.
 */
define(['jquery'],function(){
    shouqi();
    $('.lis_arrow').click(function(){
        if($(this).find('.lis_arrow_img1').size()>0){
            $(this).find('.lis_arrow_com').removeClass('lis_arrow_img1');
            $(this).find('.lis_arrow_com').addClass('lis_arrow_img2');
            $(this).addClass('lis_arrow_color');
            $(this).parent('.m_brand').css({height:'124px'});
            $(this).parent('.m_brand').find('.brand').addClass('brand_click');
            $(this).parents('.m_list').css('height','auto');
            $(this).find('.lis_arrow_text').html("收起");
        }
        else{
            $(this).find('.lis_arrow_com').removeClass('lis_arrow_img2');
            $(this).find('.lis_arrow_com').addClass('lis_arrow_img1');
            $(this).removeClass('lis_arrow_color');
            $(this).parent('.m_brand').find('.brand').removeClass('brand_click');
            $(this).parents('.m_list').css('height','40px');
            $(this).parent('.m_brand').css({height:'62px'});
            $(this).find('.lis_arrow_text').html("更多");
        }
    });
    if($('.m_list').size()<3){
        $('.shouqi').hide();
    }
    function shouqi() {
        for (var i = 4; i < $('.m_list').size(); i++) {
            $('.m_list').eq(i).hide();
        }
    }
    $('.shouqi').click(function () {
        if ($('.shouqi').find('.shouqi_img').size() > 0) {
            $('.m_list').show();
            $('.shouqi_text').html("收&nbsp;&nbsp;&nbsp;&nbsp;起");
            $('.shouqi_text').css('color', '#093');
            $('.shouqi_img_com').removeClass('shouqi_img');
            $('.shouqi_img_com').addClass('lis_arrow_img2');
        }
        else {
            shouqi();
            $('.shouqi_text').html("更多选项");
            $('.shouqi_img_com').removeClass('lis_arrow_img2');
            $('.shouqi_img_com').addClass('shouqi_img');  
            $('.shouqi_text').css('color', '#666');
        }
    });
});
