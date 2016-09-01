/**
 * Created by liu on 15-12-19.
 */

define(['jquery','fullPage','swiper','scrollbar','zoomPic','../model/qq','model/totop'], function () {
    $(function () {
        $('.page1_bg').css('display','block');
        $('body,html').css({'height':'auto'});
        /*
        * fullpage
        * */
        var slide_index = 0;
        $('#fullpage').fullpage({
            vertialCentered:true,
            anchors:['page1','page2','page3','page4','page5','page6','page7','page8'],
            scrollOverflow:false,
            'navigation': true,
            loopHorizontal:false,
            navigationTooltips:['欢迎页','首页','行业解决方案','案例展示','产品功能','新闻动态','合作伙伴'],
            //afterRender:function(){
            //    $.fn.fullpage.setAutoScrolling(true);
            //},
            afterSlideLoad:function(anchorLink,index,slideIndex,direction){
                slide_index=slideIndex;
            },
            onLeave:function(index, nextIndex, direction) {
                /*
                * 头部背景颜色
                * */
                if(nextIndex == 1||nextIndex == 2|| nextIndex == 4 ||nextIndex ==7||nextIndex ==8){
                    $('.header').addClass('header_white');
                }
                else{
                    $('.header').removeClass('header_white');
                }
                /*
                * 左右滚动条
                * */
                if(nextIndex == 1){
                    $('#fullpage').fullpage.moveSlideLeft();
                    return false;
                    //$('.fullpage').fullpage.moveTo(2);
                }
                if(index == 2&& nextIndex == 3){
                   if(slide_index<$('.slide').size()-1) {
                       $('.header').addClass('header_white');
                       $('#fullpage').fullpage.moveSlideRight();
                       return false;
                   }
                }
                /*
                * 添加动画
                * */
                $('.section').eq(nextIndex-1).addClass('animate');
            },
            afterLoad:function(vanchorLink, index){
                if(index == 1){
                    $('.page1').addClass('animate');
                }
                /*
                * 导航栏颜色变化
                * */
                if(index == 3||index == 5||index == 6){
                    $('.fp-tooltip').addClass('color_blue');
                }
                else{
                    $('.fp-tooltip').removeClass('color_blue');
                }
                //slide_index=0;
                /*
                 * 第一页头部,导航隐藏
                 * */
                if(index == 1){
                    $('#fp-nav').addClass('hide');
                }
                if($('.header').hasClass('hide')&&index>1){
                    $('.header').removeClass('hide');
                    $('#fp-nav').removeClass('hide');
                }
                   $('.section:gt('+(index-1)+')').removeClass('animate');
                 $('.section:lt('+(index-1)+')').removeClass('animate');

            },

        });
        $('#fullpage').fullpage.silentMoveTo(1);
        /*
        * page3 swiper
        * */
        var page3Swidper = new Swiper('.page3_content',{
            slidesPerView : 4,
        });

        /*
        page4 swiper
         */
       var page4Swiper = new Swiper('.page4_case_container',{
       });
        $('.page4_arrow').click(function(){
            var n = $.inArray(this,$('.page4_arrow'));
            if(n == 0){
                $('.page4_arrow').removeClass('page4_opacity');
                page4Swiper.swipePrev();
                if(page4Swiper.activeIndex == 0){
                    $('.arrow_prev').addClass('page4_opacity');
                }
            }
            else if(n == 1){
                $('.page4_arrow').removeClass('page4_opacity');
                page4Swiper.swipeNext();
                if(page4Swiper.activeIndex == $('.page4_case').size()-1){
                    $('.arrow_next').addClass('page4_opacity');
                }
            }
        })

        /*
         page5 swiper
         */
        var mySwiper = new Swiper('.page5_swiper',{
            slidesPerView : 4,
            grabCursor : true,
            autoplay : 1000,
            speed:1500,
            loop:true,
            autoplayDisableOnInteraction : false,
            //grabCursor : true,
            scrollbar: {
                container : '.swiper-scrollbar',
                hide : false,
            }
        });
        $('.page5_swiper').hover(function(){
            mySwiper.stopAutoplay();
        },function(){
            mySwiper.startAutoplay();
        })
        new ZoomPic("focus_Box1");
        new ZoomPic('focus_Box2');
    })
});