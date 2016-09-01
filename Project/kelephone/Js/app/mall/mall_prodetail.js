/**
 * Created by jiayin on 2016/1/7.
 */
define(['zepto', 'swiper','layer','module/adslide','module/navslide'], function () {
    $(function(){
        //导航
        $('#NavInline li').tap(function(){
            var indexA=$(this).index();
            $('.pro_content>div').hide().eq(indexA).fadeIn();
        });
        //点击已选
        $('#selected').tap(function(){
            $('#shaixuan').removeClass('hide');
            $('html,body').css({'height': '100%', 'overflow': 'hidden'});
        });
        //点击取消
        $('.cancel').tap(function(){
            $('#shaixuan').addClass('hide');
            $('html,body').css({'height': 'auto', 'overflow': 'visible'});
        });

        //优惠
        $('#coupon').tap(function(){
            $(this).addClass('current');
            $('.coupon_list').removeClass('hide');
        });
        $('.coupon_list li').tap(function(){
            $(this).addClass('clicked');
            $(this).find('i').text('已领取');
            $('#coupon').removeClass('current');
            $('.coupon_list').addClass('hide');
            layer.open({
                content: '已领取',
                style: 'min-width: 158px;;background-color:rgba(0,0,0,0.5); color:#fff; border:none;',
                time: 2 //2秒后自动关闭
            });
        });
    })
});