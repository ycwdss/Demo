/**
 * Created by Administrator on 2016/2/16.
 */
define(['jquery','module/recommend','module/totop','module/change_img','module/search','module/base'],function(){
    $(function(){
        $('.submit_btn').click(function(e){
            var password = /\w{6,20}/;
            var state = false;
            if(!password.test($('.old_pwd').find('input').val())){
                tip('密码格式不正确！',0);
                state=true;
            }
            if(!password.test($('.new_pwd').find('input').val())){
                tip('密码格式不正确！',1);
                state=true;
            }
            if($('.new_pwd').find('input').val() != $('.seconde_pwd').find('input').val()){
                tip("两次输入的密码不一致！",2);
                state=true;
            }
            if($('.old_pwd').find('input').val() == ""){
                tip("请输入密码！",0);
                state=true;
            }
            if($('.new_pwd').find('input').val() == ""){
                tip('请输入新密码！',1);
                state=true;
            }
            if($('.second_pwd').find('input').val() == ""){
                tip('请输入确认密码！',2);
                state=true;
            }
            if($('.confirm').find('input').val()==""){
                tip('请输入验证码！',3);
                state=true;
            }
            //监听输入框
            $('input').on('input',function(){
                $(this).parent().find('.tip').hide();
            });
            if(state){
                return false;
            }

        });
        function tip(text,index){
            $('.tip').eq(index).html(text);
            $('.tip').eq(index).show();
            $('.tip').eq(index).css('color','red');
        };
    })
})