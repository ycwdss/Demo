/**
 * Created by wangzan on 2015/10/26.
 */
define(['jquery'],function(){
    $(function () {
        function location($box,$foot,aLeft,aBottom,fLeft,fTop) {
            var footHight=$foot.height();
            $(window).scroll(function () {
                var boxHight=$box.height();
                if (($(document).height()-fTop-$(document).scrollTop()-boxHight)<=footHight) {
                    console.log($(document).height()-fTop-$(document).scrollTop()-boxHight);
                    $box.attr('style','');
                    $box.css({
                        'position':'absolute',
                        'left':aLeft+'px',
                        'bottom':aBottom+'px'
                    })
                }
                else {
                    $box.attr('style','');
                    $box.css({
                        'position':'fixed',
                        'left':fLeft+'px',
                        'top':fTop+'px'
                    })
                }
            });
        }

        location($('.box'),$('.foot'),50,800,50,300);
    })

});