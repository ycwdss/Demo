/**
 * Created by jiayin on 2016/1/25.
 */
define(['jquery', '../../module/drop', 'layer','module/base'], function () {
    $(function () {
        $('.address_infor').drop();
    });
    $(function () {
        //打开扫码
        $('#addressBtn').click(function () {
            $('#addAddress').fadeIn(200);
            $('.pay_block>div').addClass('in');
        });
        //关闭二维码,平台支付完成
        $('.offbtn').click(function () {
            $(this).parents('.pay_block').fadeOut(200);
            $('.pay_block>div').removeClass('in');
        });
    });

    $(function () {
        //地址
        $('.address_items').click(function () {
            $('.address_items .td_head1 i').removeClass('main_bg main_border');
            $(this).find('.td_head1 i').addClass('main_bg main_border');
        });

        //优惠劵
        $('#coupon_btn').click(function () {
            $('.coupon_info_box').show();
            return false;
        });
        //切换优惠劵
        $('.coupon_info_tab li').click(function () {
            var indexA = $(this).index();
            if ($(this).hasClass('main')) {
                $(this).addClass('main').siblings().removeClass('main');
                $('.tab_container .tab_content').hide();
                $('.tab_container .tab_content').eq(indexA).show();
            }
            else {
                $(this).addClass('main').siblings().removeClass('main');
                $('.tab_container .tab_content').hide();
                $('.tab_container .tab_content').eq(indexA).show();
            }
        });
        //关闭优惠券
        $('.offbtn ').click(function () {
            $('.coupon_info_box ').hide();
            return false;
        });
        $('html,body').click(function () {
            $('.coupon_info_box ').hide();
        });
        //点击领取
        $('.coupon_lsit>div').click(function () {
            $(this).addClass('clicked');
            $(this).find('.coupon_btn').text('已领取');
            $('.coupon_info_box').hide();
            layer.msg('已领取', {
                time: 1000 //1秒关闭（如果不配置，默认是3秒）
            });
        });

        //发票
        $('.invoice_info li:not(:last-child)').click(function () {
            $(this).siblings().find('.icon_checkbox').removeClass('main_bg main_border');
            $(this).find('.icon_checkbox').addClass('main_bg main_border');
        });
        //选择
        $('.pay_way li').click(function(){
            $(this).addClass('main').siblings().removeClass('main');
        })
    })
});