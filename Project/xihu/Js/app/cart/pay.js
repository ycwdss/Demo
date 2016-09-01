/**
 * Created by wangzan on 2016/1/12.
 */
define(['jquery', 'module/base'], function () {
    $(document).ready(function () {

        $('.pay_way_nav a').click(function () {
            var indexA = $(this).index();
            if ($(this).hasClass('current')) {
                $(this).addClass('current').siblings().removeClass('current');
                $(this).parents('.pay_way_nav').next('.pay_way_item').find('ul').hide();
                $(this).parents('.pay_way_nav').next('.pay_way_item').find('ul').eq(indexA).show();
            }
            else {
                $(this).addClass('current').siblings().removeClass('current');
                $(this).parents('.pay_way_nav').next('.pay_way_item').find('ul').hide();
                $(this).parents('.pay_way_nav').next('.pay_way_item').find('ul').eq(indexA).show();
            }
        });

        $('.pay_way_item ul li').click(function(){
            $(this).addClass('main_border').siblings().removeClass('main_border');
        });

        $('#ErWeiMa').click(function(){
            $('#payWeiXin').fadeIn(200);
            $('.pay_block>div').addClass('in');
        });

        $('.pay_offbtn').click(function(){
            $(this).parents('.pay_block').fadeOut(200);
            $('.pay_block>div').removeClass('in');
        });

        $('.pay_way_item>ul>li').not('#ErWeiMa').click(function(){
            $('#payFinish').fadeIn(200);
            $('.pay_block>div').addClass('in');
        });
    });
});


