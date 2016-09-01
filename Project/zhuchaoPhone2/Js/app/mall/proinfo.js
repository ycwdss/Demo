/**
 * Created by jiayin on 2016/3/17.
 */
define(['zepto','swiper','module/mall_nav','module/totop'],function(){
    $(function(){
        //广告
        var Ad = new Swiper('.module_ad3',{
            pagination : '.swiper-pagination',
            autoplay : 3000,
            speed:300,
            loop:true
        });

        //在线询价弹窗
        $('.online_btn').click(function(){
            $('.online').show();
            $('.footer_fixed').hide();
        });
        $(".online_close").click(function(){
            $('.online').hide();
            $('.footer_fixed').show();
        });
        //产品介绍
        $('.item_box').tap(function(){
            var that=$(this);
            if(that.hasClass('current')){
                $(this).removeClass('current');
            }
            else{
                $(this).addClass('current').siblings().removeClass('current');
            }
        })
    });
});