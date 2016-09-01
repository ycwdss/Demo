/**
 * Created by Administrator on 2016/1/3.
 */
define(['zepto','module/totop'],function() {
    //修改信息
    $(function () {
        $('.my_account ul li').click(function(){
            var oIndex=$(this).index();

            //修改头像
            if(oIndex == 0){   
                $('.black_bg').show();
                $('.change_photo').show();
            }
            //修改昵称
            if(oIndex==2){
                $('.my_account').hide();
                $('.header_back_box').addClass('change_show');
                $('.header_title h2').html('修改昵称');
                $('.change_nick_name').show();
                $('.header_right span').html('');
            }
            //修改性别
            if(oIndex==3){
                $('.change_sex').show();
                $('.black_bg').show();
                //$('body').css('position','fixed');
            }
            ////修改手机号
            //if(oIndex==5){
            //    $('.my_account').hide();
            //    $('.change_tel').show();
            //    $('.top_title').html('手机号');
            //}
            //修改邮箱
            if(oIndex==6){
                $('.my_account').hide();
                $('.header_back_box').addClass('change_show');
                $('.header_title h2').html('修改邮箱');
                $('.change_email').show();
            }
            ////修改密码
            //if(oIndex==8){
            //    $('.my_account').hide();
            //    $('.change_pw').show();
            //    $('.top_title').html('修改密码');
            //}
        })

    });

    $('.sure_btn').click(function () {
        checkInfo();
        checkpw();
    });

    function checkInfo()
    {
        //昵称
        var oNickname=document.getElementById("new_nick");
        var oNicktips=document.getElementById("nick_tips");
        var regName = /^[\u4E00-\u9FA5\uf900-\ufa2d\w]{4,20}$/;

        if (!regName.test(oNickname.value))
        {
            oNicktips.style.color="red";
            oNickname.focus();
        }else{
            oNicktips.style.color="#000";
        }
        //邮箱
        var oEmail=document.getElementById("new_eamil");
        var oEamailTips=document.getElementById("eamil_tips");
        var regEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        if (!regEmail.test(oEmail.value.length))
        {
            oEamailTips.style.display="block";
            oEmail.focus();
        }else{
            oEamailTips.style.display="none";
        }
        //密码
        var opw=document.getElementById("pw_one");
        var oPwTips=document.getElementById("pw_tips");
        var regPw=/^[\b|\w]{5,15}$/;
        if (!regPw.test(opw.value))
        {
            oPwTips.style.color='red';
        }else{
            oPwTips.innerText='';
        }
    }
//修改性别弹窗形式
    $('.change_sex ul li').click(function (e) {
        var $this=$(this);
        $('.address_ma').attr('checked',true);
        $this.find('input').attr('checked',true);
        $this.siblings().find('input').removeAttr("checked");
        $this.siblings('li').find('.my_select').removeClass('mainbgcolor');
        $this.find('.my_select').addClass('mainbgcolor');
        e.stopPropagation();
    });
//修改性别点确定后 内容页变化
    $('.make_sure').click(function (e) {
        $('.change_sex').hide();
        $('.black_bg').hide();
        $('.my_account').show();
        var oChecked=$('.change_sex ul li').find('input:checked').val();
        $('.my_account ul li:nth-child(4) a span').text(oChecked);
        e.stopPropagation();
    });
    $('.quit').click(function () {
        $('.change_sex').hide();
        $('.black_bg').hide();
        $('.my_account').show();
        e.stopPropagation();
    });

    //验证两次密码是否一致
    function checkpw(){

        var oPwone=document.getElementById('pw_one');
        var oPwtwo=document.getElementById('pw_two');
        var oPwTips=document.getElementById('pw_tips');
        if(oPwone.value!==oPwtwo.value){
            oPwTips.innerText='您两次输入的密码不一致，请重新输入！';
            oPwTips.style.color='red';
        }

    }
//日期弹窗插件
    $(function(){
        var currYear = (new Date()).getFullYear();
        var opt={};
        opt.date = {preset : 'date'};
        opt.datetime = {preset : 'datetime'};
        opt.time = {preset : 'time'};
        opt.default = {
            theme: 'android-ics light', //皮肤样式
            display: 'modal', //显示方式
            mode: 'scroller', //日期选择模式
            dateFormat: 'yyyy-mm-dd',
            lang: 'zh',
            showNow: true,
            nowText: "今天",
            startYear: currYear - 100, //开始年份
            endYear: currYear + 100 //结束年份
        };
        $("#appDate").mobiscroll($.extend(opt['date'], opt['default']));
    });
    //点击黑色背景返回
    $('.black_bg').click(function(){
        $('.change_sex').hide();
        $('.change_photo').hide();
        $('.black_bg').hide();
    });
//点击返回按钮
    $('.header_back_box').click(function(){
        if($(this).hasClass('change_show')){
            $('.my_account').show();
            $('.change_nick_name').hide();
            //$('.change_tel').hide();
            $('.change_pw').hide();
            $('.change_email').hide();
            $('.header_title h2').html('个人中心');
            $(this).removeClass('change_show');
            return false;
        }
    })
});