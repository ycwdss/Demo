/**
 * Created by Administrator on 2016/1/5.
 */
define(['zepto'],function(){
    $(function(){
        /*
        修改密码页面
         */
        $('.phone_button,.confirm_button').click(function(){
            var phone = $('.phone_num').val();
            var test = /^1\d{10}$/;
            if(phone == ''){
                $('.tip').html('请输入手机号！');
            }
            if(!test.test(phone)){
                $('.tip').show();
            }
        });
        if( document.getElementById('phone_num')!=null){
            document.getElementById('phone_num').oninput = function(){
                $('.tip').hide();
            }
        }

    });
    /*
    重置密码页面
     */
    $('.reset_button').click(function(){
        var password = /\w{5,20}/;
        if($('.pwd').val() == ""){
            tip("请输入密码！");
        }
        if($('.confirm_pwd').val() == ""){
            tip('请输入确认密码！');
        }
        if(!password.test($('.pwd').val())){
            tip('密码格式不正确！')
        }
        if($('.pwd').val() != $('.comfirm_pwd').val()){
            tip("两次输入的密码不一致！");
        }

    });
    if( document.getElementById('pwd')!=null){
        document.getElementById('pwd').oninput = function(){
            $('.tip').hide();
        }
    }

    function tip(text){
       $('.tip').show();
        $('.tip').html(text);
    }
});