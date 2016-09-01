/**
 * Created by jiayin on 2016/2/15.
 */
define(['jquery','module/totop','module/base'], function () {
    $(document).ready(function () {
        $('.classify_list h2').click(function () {
            if($(this).hasClass('active')){
                $(this).find('i').addClass('icon-youmian').removeClass('icon-xiamian');
                $(this).next().hide();
                $(this).removeClass('active');
            }else {
                $(this).find('i').removeClass('icon-youmian').addClass('icon-xiamian');
                $(this).next().show();
                $(this).addClass('active');
            }
        })
        
        //更多选项
        $('.show_more').click(function () {

            if(!$(this).hasClass('active')){
                $(this).addClass('active');
                $(this).children('span').addClass('main').text('收起');
                $(this).children('i').removeClass('icon-downjiantou').addClass('main icon-upjiantou');
                $('.choose_list .list_item:gt(2)').show();
                $('.choose_list .list_item:last').addClass('no_bb');
                $('.choose_list .list_item:nth-child(3)').removeClass('no_bb');
            }else {
                $(this).removeClass('active');
                $(this).children('span').removeClass('main').text('更多选项');
                $(this).children('i').removeClass('main icon-upjiantou').addClass('icon-downjiantou');
                $('.choose_list .list_item:gt(2)').hide();
                $('.choose_list .list_item:nth-child(3)').addClass('no_bb');
            }
        });
        //删除已选条件
        $('.choosed .icon-smallcuo').click(function () {
            $(this).parent().remove();
        });
    });
});