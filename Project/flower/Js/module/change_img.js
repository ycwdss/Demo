/**
 * Created by Administrator on 2016/2/15.
 */
define(['jquery'],function(){
    $(function(){
        $('.user_img span').click(function(){
            $('.change_img').show();
        })
        $('.close_window,.del_img').click(function(){
            $('.change_img').hide();
        })
    })
})