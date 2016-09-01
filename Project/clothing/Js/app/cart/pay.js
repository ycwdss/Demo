/**
 * Created by jiayin on 2016/3/25.
 */
define(['jquery'], function () {
    $(document).ready(function () {

        $('.pay_way_box ul li').click(function(){
            $('.pay_way_box ul li').removeClass('main_border');
            $(this).addClass('main_border');
        });

        $('#ErWeiMa').click(function(){
            $('#payWeiXin').fadeIn(200);
            $('.pay_block>div').addClass('in');
        });

        $('.pay_offbtn').click(function(){
            $(this).parents('.pay_block').fadeOut(200);
            $('.pay_block>div').removeClass('in');
        });

        $('.pay_way_box>ul>li').not('#ErWeiMa').click(function(){
            $('#payFinish').fadeIn(200);
            $('.pay_block>div').addClass('in');
        });
    });
});