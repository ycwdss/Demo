/**
 * Created by Administrator on 2015/12/15.
 */
define(['jquery'],function(){
    $(function(){

        /*
        是否已选择服务条款
         */
        $('.check_btn').click(function(){
            if($(this).parents('.message_ele').find('input').prop('checked')){
                $(this).find('i').addClass('hide');
            }else{
                $(this).find('i').removeClass('hide');
                $(this).parents('.message_ele').find('.tip').addClass('hide');
                //$('.tip').eq(4).addClass('hide');
            }
        });
        $('.confirm_btn').click(function(){
           $('.confirm2').show();
        });
        /*
        提交之前的验证
         */
        $('.submit').click(function(){
            var phone = /^1\d{10}$/;
            if($('#user_name').val() == ""){
                Message(event,"手机号不能为空",$('#user_name'));
            }
            else if(!phone.test($('#user_name').val())){
                Message(event,"手机号格式不正确",$('#user_name'));
            }
            if($('#identify').val() == ""){
                Message(event,"验证码不能为空",$('#identify'));
            }
            if($('#password').val() == ""){
                Message(event,"密码不能为空",$('#password'));
            }
            else if($('#password').val().length>1&&$('#password').val().length<6){
                Message(event,"密码格式不正确",$('#password'));
            }
            if($('#password').val() != $('#identify_password').val()){
                Message(event,"两次输入的密码不一致",$('#identify_password'));
            }
            if($('#agreement').prop('checked')){
            }else{
                Message(event,'请接受服务条款！',$('#agreement'))
            }
        });
        /*
        监听输入框是否有数值输入
         */
        addListener(document.getElementById('user_name'),$('#user_name'));
        addListener(document.getElementById('password'),$('#password'));
        addListener(document.getElementById('identify'),$('#identify'));
        addListener(document.getElementById('identify_password'),$('#identify_password'));
        function addListener(object,obj){
            var testinput = document.createElement('input');
            if('oninput' in testinput){
                if(object){
                    object.oninput=function(){
                        Tip_hide(obj);
                }
                };
            }else{
                object.onpropertychange=function(){
                    Tip_hide(obj);
                }
            }
        }
        function Tip_hide(obj){
            if(!obj.parents('.message_ele').find('.tip').hasClass('hide')){
                obj.parents('.message_ele').find('.tip').addClass('hide');
            }
            //if(!$('.tip').eq(index).hasClass('hide')){
            //    $('.tip').eq(index).addClass('hide');
            //}
        };
        function Message(event,message,obj){
            obj.parents('.message_ele').find('.tip').removeClass('hide');
            obj.parents('.message_ele').find('.tip').html(message);
            //$('.tip').eq(index).removeClass('hide');
            //$('.tip ').eq(index).html(message);
            event.preventDefault();
        }
    });

});