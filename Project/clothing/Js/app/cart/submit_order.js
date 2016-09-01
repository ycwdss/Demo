/**
 * Created by jiayin on 2016/3/29.
 */
define(['jquery'], function () {
    $(function () {
        //选择按钮
        $('.btn').click(function () {
            $(this).siblings().removeClass('current');
            $(this).addClass('current');
        });
        //查看更多地址
        $('.read_more').click(function () {
            if ($(this).hasClass('current')) {
                $(this).removeClass('current').find('span').html('更多地址');
                $('.address_infor_box').removeClass('current')
            }
            else {
                $(this).addClass('current').find('span').html('收起地址');
                $('.address_infor_box').addClass('current');
            }
        });
        //地址样式
        $('.address_infor_list').click(function () {
            $('.address_infor_box .address_infor_list').removeClass('current');
            $(this).addClass('current');
        });
        //新增地址
        $('#appendAddress').click(function(){
            $('.new_addr').show();
        });
        $('.addr_cancel').click(function(){
            $('.new_addr').hide();
        });

    })
});