/**
 * Created by Administrator on 2016/4/5.
 */
define(['zepto'],function () {
    $(function () {
        var w_height = $(window).height();
        var origin,touchY1,touchY2,touchY3;
        function getOrigin() {
            origin = $('.side_nav').css('transform');
            console.log(origin.match(/matrix\(([\d,\s]*)\)/))
            origin = origin.match(/matrix\(([\d,\s]*)\)/)[1].split(', ');
            origin = origin[5];
        }
        getOrigin();
        $('.side_nav').on('touchstart', function(e) {

            touchY1 = e.touches[0].clientY;
        }).on('touchmove', function(e) {
            touchY2 = e.touches[0].clientY;

            $(this).css('transform','translateY('+(parseInt(origin)+parseInt(touchY2)-parseInt(touchY1))+'px)')
            e.preventDefault();

            }).on('touchend', function(e) {
            touchY3 = parseInt($(this).offset().top)-48;
            console.log(touchY3 - touchY1)
            origin = $('.side_nav').css('transform');
            // console.log(origin,origin.match(/translateY\(\-*([\d]*)px\)/));
            origin = origin.match(/translateY\(\-*([\d]*)px\)/)
            origin = origin[1];
            if(touchY3 - touchY1 >= 0){
                $(this).css('transform','translateY(0)');
                origin = 0;
            }else{
                if($(this).height()-parseInt(touchY1 - touchY3)-origin<w_height){
                    origin = $(this).height()-w_height;
                }
                console.log(w_height,$(this).height()-parseInt(touchY1 - touchY3)-origin)
                origin = 0-origin;
            }
        });

    })
})