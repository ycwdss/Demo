/**
 * Created by Administrator on 2015/11/26.
 */

/**
 * Created by Administrator on 2015/10/15.
 */
define(['jquery'],function(){
    $(function(){
        //������ ������ʾ����
        var time;
        $('.com_logo').hover(function(){
            var $this = $(this);
            var delay=0;
            if(!$(this).hasClass('cart_current')){
                $($this).addClass('cart_current');
                time=setInterval(function(){
                    delay++;
                    if(delay>1){
                        $this.animate({'width':'110px'},200);
                        window.clearInterval(time);
                    }
                },100);
            }
        },function(){
            clearInterval(time);
            var n= $.inArray(this,$('.com_logo'));
            $(this).animate({'width': '34px'}, 200, function () {
                $('.com_logo').eq(n).removeClass('cart_current');
            });
        });

    });
});