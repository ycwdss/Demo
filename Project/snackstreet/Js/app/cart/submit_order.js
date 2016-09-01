/**
 * Created by Administrator on 2016/1/20.
 */
define(['jquery','totop','qrcode','module/qrcode'],function(){
    $(function(){
        //收货地址
        $('.default_addr').click(function(){
            if(!$(this).hasClass('show')){
                $('.show').html('设为默认地址');
                $('.default_addr').removeClass('show');
                $(this).addClass('show');
                $(this).html('默认地址');
            }
        });
        $('.del_addr').click(function(){
            $(this).parents('.list').remove();
        });
        $('.use_addr') .click(function () {
            $(this).closest('.list ').find('.iconfont').show();
            $(this).closest('.list ').siblings().find('.iconfont').hide();
        });
        $('.new_addr_btn').click(function(){
            $(this).siblings('.address_new').slideDown();
        });
        $('.m_new_addr .close').click(function(){
            $(this).parents('.address_new').slideUp();
        })
        //地址弹窗
        $('.edit_addr').click(function(){
            $('.l_edit_addr').show();
        });
        $('.l_edit_addr .close,.close_window').click(function(){
            $('.l_edit_addr').hide();
        });
        //优惠券
        $('.coupons').click(function(){
            if(!$(this).find('.cpn_tips').hasClass('coupon_used')){
                $('.cpn_tips').removeClass('coupon_used');
                $(this).find('.cpn_tips').addClass('coupon_used');
                $('.using_coupon em').html($(this).find('.cpn_money em').html());
            }
        });
        //发票
        $('.m_payway .option_content span,.m_invoice .option_content span').click(function(){
           $(this).addClass('main_bg').siblings().removeClass('main_bg');
        })
    })
})