/**
 * Created by Administrator on 2016/1/26.
 */
define(['zepto','swiper','module/nav_show','module/totop'],function(){
    $(function(){
        var swiper = new Swiper('.swiper',{
            pagination : '.swiper-pagination',
            effect : 'coverflow',
            loop:true,
        })
    })
})