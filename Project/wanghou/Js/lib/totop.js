/**
 * Created by wangzan on 2016/1/12.
 */
define(['jquery','totop'], function () {

    $(document).ready(function () {
      $(window).scroll(function () {
        if($(window).scrollTop()>500){

            $('.totop').fadeIn();
        }else {
            $('.totop').fadeOut();
        }
      });
        $('.totop').click(function () {
            $('html,body').animate({scrollTop:0},1000)
        });
    });
});