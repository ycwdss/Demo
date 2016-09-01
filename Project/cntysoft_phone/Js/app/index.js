/**
 * Created by wangzan on 2016/1/26.
 */
define(['zepto','module/nav_show','swiper','swiper.animate'],function(){
    $(document).ready(function () {
        var swiper = new Swiper('.slide', {
            direction: 'vertical',
            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            },
            onSlideChangeStart: function (swiper) {
               if($('.nav').show()){
                 $('.nav').hide();
                   $('.nav_btn').removeClass('active');
               }
                if(swiper.activeIndex==0){
                    $('.header').hide();
                }
                if(swiper.activeIndex==1){
                    var timer;
                    timer=setTimeout(function () {
                        $('.shake').addClass('shake_active');
                    },4000)
                    $('.header').show();
                }
                if(swiper.activeIndex==2 || swiper.activeIndex==4 || swiper.activeIndex==5){
                    $('.header').show();
                    $('.header_link').html('<img src="Images/icon/icon_logo_black.png">');
                    $('.nav_btn').html('  <img src="Images/icon/icon_nav_black.png">')
                }else {
                    $('.header_link').html('<img src="Images/icon/icon_logo_white.png">');
                    $('.nav_btn').html('  <img src="Images/icon/icon_nav_white.png">')
                }
            }
        });
        //产品功能
        var swiper = new Swiper('.product_info', {
            direction : 'horizontal',
            scrollbar:'.swiper-scrollbar',
            scrollbarHide:false,
            effect : 'cube',
            cube: {
                slideShadows: false,
                shadow: false,
                shadowOffset: 100,
                shadowScale: 0
            }

        });
        //案例切换
        var swiper = new Swiper('.page4_container', {
            direction : 'horizontal',
            loop : true,
            prevButton:'.arrow_prev',
            nextButton:'.arrow_next',
            onlyExternal : true,
        });

        //案例详情里面小图切换
        var swiper = new Swiper('.case_info', {
            direction : 'horizontal',
            loop : true,
            effect: 'coverflow',
            coverflow: {
                rotate: 0,
                stretch:200,
                depth: 100,
                modifier: 1,
                slideShadows : false
            }
        });
    });
});