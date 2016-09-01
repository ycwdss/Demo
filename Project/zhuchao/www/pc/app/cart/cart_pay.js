/**
 * Created by Administrator on 2015/10/16.
 */
define(['jquery','fhlib/totop'],function(){
    //新增收货地址
    $('.buyer_title span').click(function(){
        $('.new_receiver').show(200);
    });
    $('.cancel').click(function(){
        $('.new_receiver').hide(200);
    });
// 查看地址
    var box=$('.address_box');
    $('.read_more').click(function(){
        if($(box).hasClass('current')){
            $(this).find('span').html('更多地址');
            $(this).find('b').removeClass('current');
            $(this).prev('.address_box').removeClass('current');
        }
        else{
            $(this).find('span').html('收起地址');
            $(this).find('b').addClass('current');
            $(this).prev('.address_box').addClass('current');
        }

    });

});