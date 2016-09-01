/**
 * Created by guan on 2015/11/2.
 */
define(['zepto','fhlib/new_totop','app/modelPage/message_confirm'],function() {
    $('.check').click(function () {
        if ($(this).is('.active')) {
            $('.check').removeClass('active');
        }
        else {
            $('.check').addClass('active');
        }
    });
    $('.top em').click(function () {
        $.message_confirm({
            text:'是否删除该地址？',
            callback:function(){
                alert(324);
            }
        })
    });
    $('.area').click(function(){
        $('.shaixuan_bg').show();
        $('.shaixuan_detail').eq(0).show();
    });
    $('.shaixuan_detail li').click(function(){
        var index=$(this).parents('.shaixuan_detail').index();
        $(this).parents('.shaixuan_detail').hide();
        if(index<$('.shaixuan_detail').size()-1){
            $('.shaixuan_detail').eq(index+1).show();
        }
        else if(index == $('.shaixuan_detail').size()-1){
            $('.shaixuan_bg').hide();
        }
    });
    $('.detail_hide').click(function(){
        var index=$(this).parents('.shaixuan_detail').index();
        $(this).parents('.shaixuan_detail').hide();
        if(index>0){
            $('.shaixuan_detail').eq(index-1).show();
        }
        else if(index == 0){
            $('.shaixuan_bg').hide();
        }
    });
});