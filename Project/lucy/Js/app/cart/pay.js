/**
 * Created by jiayin on 2016/1/22.
 */
define(['jquery','module/base'], function () {
    $(function(){
        //展开清单
        $('#orderDetail').click(function(){
            $(this).find('.sanjiao').toggleClass('current');
            $('.order_list').slideToggle(400);
        });
        //切换支付方式
        $('.pay_way_nav a').click(function(){
            var indexA=$(this).index();
            if($(this).hasClass('main')){
                $(this).addClass('main').siblings().removeClass('main');
                $(this).parents('.pay_way_nav').next().find('ul').hide();
                $(this).parents('.pay_way_nav').next().find('ul').eq(indexA).show();
            }
            else{
                $(this).addClass('main').siblings().removeClass('main');
                $(this).parents('.pay_way_nav').next().find('ul').hide();
                $(this).parents('.pay_way_nav').next().find('ul').eq(indexA).show();
            }
        });
        //点击支付
        $('.pay_way_item ul li').click(function(){
            $(this).addClass('main_border').siblings().removeClass('main_border');
        });
        //打开扫码
        $('#ErWeiMa').click(function(){
            $('#payWeiXin').fadeIn(200);
            $('.pay_block>div').addClass('in');
        });
        //关闭二维码,平台支付完成
        $('.pay_offbtn').click(function(){
            $(this).parents('.pay_block').fadeOut(200);
            $('.pay_block>div').removeClass('in');
        });
        //打开平台支付完成
        $('.pay_way_item>ul>li').not('#ErWeiMa').click(function(){
            $('#payFinish').fadeIn(200);
            $('.pay_block>div').addClass('in');
        });
    });
});