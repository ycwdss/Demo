/**
 * Created by jiayin on 2016/1/11.
 */
define(['zepto','layer'], function () {
    $(function () {
        //点击支付方式
        $('#payBtn').tap(function () {
            layer.open({
                title: '支付方式',
                content: $('.pay_style_box').html(),
                btn: ['确认', '取消'],
                yes: function (index) {
                    layer.close(index);
                }, no: function(){
                    location.reload();
                    layer.close(index);
                }
            });
            //点击按钮
            $('.item').tap(function () {
                var clickText = $(this).find('span').text();
                $(this).addClass('clicked').siblings().removeClass('clicked');
                $('#payBtn').find('.choose_text').text(clickText);
            });
        });
        //地址
        $('.user_info').tap(function(){
            $(this).addClass('current');
            $('.address_list').removeClass('hide');
        });
        $('.address_list li').tap(function(){
            $(this).addClass('maincolor').siblings().removeClass('maincolor');
            $('.user_info').removeClass('current');
            $('.address_list').addClass('hide');
        });
        //优惠
        $('#coupon').tap(function(){
            $(this).addClass('current');
            $('.coupon_list').removeClass('hide');
        });
        $('.coupon_list li').tap(function(){
            var text=$(this).find('a').text();
            $(this).addClass('maincolor').siblings().removeClass('maincolor');
            $(this).parents('.coupon').find('.choose_text').text(text);
            $('#coupon').removeClass('current');
            $('.coupon_list').addClass('hide');
        })
    });
});