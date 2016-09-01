/**
 * Created by jiayin on 2016/1/3.
 */
define(['zepto','swiper'], function () {
    $(function(){
        //proCard
        var proCard = new Swiper('.pro_list_box', {
            slidesPerView : 3,
            spaceBetween : 10
        });
        $(' .checkbox_container').click(function(){
            if($(this).hasClass('clicked')){
                $(this).removeClass('clicked').find('.checkbox').removeClass('mainbgcolor');
                $('.total_left').find('.checkbox_container span').removeClass('clicked').find('.checkbox').removeClass('mainbgcolor');
                $(this).siblings('.goods_list').find('.checkbox_container').removeClass('clicked').find('.checkbox').removeClass('mainbgcolor');
                if($(this).parent('.total_left').length>0){
                    $(' .checkbox_container').removeClass('clicked').find('.checkbox').removeClass('mainbgcolor');
                }
            }
            else{
                if($(this).parent('.total_left').length>0){
                    $('.checkbox_container').addClass('clicked').find('.checkbox').addClass('mainbgcolor');
            }
                else{
                    $(this).addClass('clicked').find('.checkbox').addClass('mainbgcolor');
                    $(this).siblings('.goods_list').find('.checkbox_container').addClass('clicked').find('.checkbox').addClass('mainbgcolor');
                }
            }
        });
        $('.top_edit').click(function(){
            if($(this).find('span').html()=="编辑"){
                $(this).find('span').html('完成');
                $('.total').hide();
                $('.edit').show();
                $('.checkbox_container').removeClass('clicked').find('.checkbox').removeClass('mainbgcolor');
            }
            else{
                $(this).find('span').html('编辑');
                $('.edit').hide();
                $('.total').show();
                $('.checkbox_container').addClass('clicked').find('.checkbox').addClass('mainbgcolor');
            }
        });
    })
});