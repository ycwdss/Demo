/**
 * Created by wangzan on 2016/1/12.
 */
define(['jquery','module/totop'], function () {
    $(document).ready(function () {
        $('.pay_way_nav a').click(function(){
            var index = $.inArray(this,$('.pay_way_nav a'));
            if(!$(this).hasClass('current')){
                $(this).addClass('current');
                $(this).siblings('a').removeClass('current');
                $('.pay_way_ele').hide();
                $('.pay_way_ele').eq(index).show();
            }
        });
        $('.weixin_btn').click(function(){
            $('.weixin').show();
        });
        $('.weixin_close').click(function(){
            $('.weixin').hide();
        });
        $('.pay_way_ele').eq(1).find('li').click(function(){
            $('.wangyin').show();
        });
        $('.wangyin_close').click(function(){
            $('.wangyin').hide();
        })
    });

});