/**
 * Created by guan on 2015/10/29.
 */
define(['jquery','fhlib/cookie','slick','fhlib/totop','fhlib/navselect','fhlib/search',
    'lazyload','Core','Front','fhlib/imglazy'],function($) {

//预约弹窗------------------------
    $(function () {
        $('.yuyue_pic p').click(function () {
            $('.mask').show();
        })
        $('.make_order h1 i').click(function () {
            $('.mask').hide();
        })
        //电话号码联系方式
        var re=/^1[3|4|5|8][0-9]\d{8}$/;
        $('.make_order .btn').click(function(){
            var tel_value=$('.make_order .tel').val();
            var name_value=$('.make_order .name').val();
            if(name_value==''){
                alert('请输入您的称呼！')
            }else if(!re.test(tel_value)){
                alert('请输入正确的电话格式！')
            }

        })

    })
    //借贷计算器
    $('.time').find('a').click(function(){ //借贷时间切换
        $('.time').find('a').attr('class','');
            $(this).attr('class','current_time');
    });
});