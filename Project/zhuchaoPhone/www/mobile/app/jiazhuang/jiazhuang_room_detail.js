/**
 * Created by Administrator on 2015/11/21.
 */
define(['lazyload','app/jiazhuang/jiazhuang_index','swiper','fhlib/new_totop'], function () {
    /*
     *导航栏左右移动
     */
    if($('.nav_current').offset().left-$('.l_nav').offset().left > 0){
        $('.l_nav ul').css({'left':  ($('.l_nav').width() - $('.l_nav ul').width()) + 'px'});
    }
    var l_nav = document.getElementById('l_nav');//利用id添加监听事件
    var start = 0;    //touchstart坐标
    var move = 0;       //移动时离start坐标
    var end = 0;        //touchend 坐标
    var local = 0;      //记录上一次移动距离
    l_nav.addEventListener('touchstart', touch, false);
    l_nav.addEventListener('touchmove', touch, false);
    l_nav.addEventListener('touchend', touch, false);
    function touch(event) {
        var event = event || window.event;
        if (event.type == "touchstart") {
            start = event.touches[0].clientX;
        }
        if (event.type == "touchend") {
            end = event.changedTouches[0].clientX;

            if (start > end+10) {
                $('.l_nav ul').animate({'left':  ($('.l_nav').width() - $('.l_nav ul').width()) + 'px'},200);
                local=$('.l_nav').width() - $('.l_nav ul').width();
            }
            else if(start+10 < end){
                $('.l_nav ul').css({'left': '0'});
                local=0;
            }
        }
        if (event.type == "touchmove") {
            move = event.touches[0].clientX - start;
            event.preventDefault();
            if (($('.l_nav').width() - $('.l_nav ul').width()) < move) {
                $('.l_nav ul').css({'left': (move+local) + 'px'});
                //console.log(move, $('.l_nav').width() - $('.l_nav ul').width());
            }
        }
    }

    /*
     *swiper
     */
    var banner = new Swiper('.banner', {
        pagination : '.swiper-pagination',
        onSlideChangeEnd:function(swiper){
            var n = swiper.activeIndex;
        }
    });
});