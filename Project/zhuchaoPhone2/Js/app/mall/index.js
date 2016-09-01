/**
 * Created by jiayin on 2016/3/16.
 */
define(['zepto','swiper','module/mall_nav','module/totop'],function(){
    $(function(){
        //点击搜索
        $('#search_input').tap(function(){
            $('.search_box').show();
            $('html').css({
                height:'100%',
                overflowY:'hidden'
            });
        });
        $('.header_back_box ').tap(function(){
            $('.search_box').hide();
            $('html').css({
                height:'auto',
                overflowY:'auto'
            });
        });
        //广告
        var Ad = new Swiper('.module_ad3',{
            pagination : '.swiper-pagination',
            autoplay : 3000,
            speed:300,
            loop:true
        })
    });
});