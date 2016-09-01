/**
 * Created by Administrator on 2015/10/30.
 */
define(['zepto','fhlib/new_totop'],function() {
    $(' .checkbox_container').click(function(){
        if($(this).hasClass('clicked')){
            $(this).removeClass('clicked');
            $('.total_left').find('.checkbox_container').removeClass('clicked');
            $(this).parent('.pro_shop').siblings('.pro_ele').find('.checkbox_container').removeClass('clicked');
            if($(this).parent('.total_left').length>0){
                $(' .checkbox_container').removeClass('clicked');
            }
            if($(this).parent('.pro_shop').length==0){
                $(this).parents('.pro_ele').siblings('.pro_shop').find('.checkbox_container').removeClass('clicked');
            }
        }
        else{
            if($(this).parent('.total_left').length>0){
                $(' .checkbox_container').addClass('clicked');
            }
            else{
                $(this).addClass('clicked');
                $(this).parent('.pro_shop').siblings('.pro_ele').find('.checkbox_container').addClass('clicked');
            }
        }
    });
    $('.top_edit').click(function(){
        if($(this).html()=="编辑"){
            $(this).html('完成');
            $('.total').hide();
            $('.edit').show();
            $('.checkbox_container').removeClass('clicked');
        }
        else{
            $(this).html('编辑');
            $('.edit').hide();
            $('.total').show();
            $('.checkbox_container').addClass('clicked');
        }
    });
});