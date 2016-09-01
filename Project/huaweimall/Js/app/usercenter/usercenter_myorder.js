/**
 * Created by wangzan on 2015/12/18.
 */
define(['jquery','model/head','model/totop'],function(){

    $(document).ready(function () {
        $('.order_step li').click(function () {
            $(this).addClass('current').siblings().removeClass('current');
            $('.myorder').children().eq($(this).index()).show().siblings().hide();
        })
        //全选去支付
        $('.select_all').click(function(){

            //全选
            if($(this).is(':checked')){
                 $('.select_all').prop('checked',true);
                 $('.order_table input').prop('checked',true);

            }else{
                $('.select_all').prop('checked',false);
                $('.order_table input').prop('checked',false);
            }
        });
        $('.order_bd .order_table input').each(function () {
            $(this).click(function () {
                if(!$(this).is(':checked')){
                    $('.select_all').prop('checked',false);
                }else{
                    $('.select_all').prop('checked',true);
                }
            });
        });
    });
});