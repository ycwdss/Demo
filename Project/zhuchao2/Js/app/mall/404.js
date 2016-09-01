/**
 * Created by jiayin on 2016/3/21.
 */
define(['jquery'], function (){
    $(function (){
        var turn = 0;
        var state = true;
        setInterval(function (){
            if(state == true){
                $('.container').css('transform', 'rotate(' + turn + 'deg)');
                turn++;
                if(turn == 20){
                    state = false;
                }
                $('.people').css('top', (430 - Math.abs(turn) * 2) + 'px');
            }
            else{
                $('.container').css('transform', 'rotate(' + turn + 'deg)');
                turn--;
                if(turn == -20){
                    state = true;
                }
                $('.people').css('top', (430 - Math.abs(turn) * 2) + 'px');
            }
        }, 35);
        $('.com_link').hover(function (){
            $('.com_link').eq($.inArray(this, $('.com_link'))).toggleClass('hover');
        });
    });
});