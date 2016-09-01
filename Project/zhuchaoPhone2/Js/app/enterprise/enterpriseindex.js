/**
 * Created by wangzan on 2016/3/18.
 */
define(['zepto','swiper','module/totop'],function(){
    $(function(){
        //广告
        var Ad = new Swiper('.module_ad3',{
            pagination : '.swiper-pagination',
            autoplay : 3000,
            speed:300,
            loop:true
        });
        $('.brand_arrow').click(function () {

            if($(this).hasClass('.on')){
                $(this).removeClass('icon-xiangshangjiantou').addClass('icon-xiangxiajiantou');
                $(this).closest('.brand').next().hide();
                $(this).removeClass('.on');
            }else {
                $(this).removeClass('icon-xiangxiajiantou').addClass('icon-xiangshangjiantou');
                $(this).closest('.brand').next().show();
                $(this).addClass('.on');
            }
        });
    })
})