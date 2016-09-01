/**
 * Created by wangzan on 2015/12/21.
 */
define(['jquery','model/head','model/totop'],function(){

    $(document).ready(function () {

        //判断两次输入的密码是否一致

        $('.pw_two').change(function () {
            var pw_oneval=$('.pw_one').val();
            var pw_twoval=$('.pw_two').val();
          if(pw_oneval!==pw_twoval){
            $(this).next().css('visibility','visible');
          }else{
              $(this).next().css('visibility','hidden');
          }
        });
    });
});