/**
 * Created by wangzan on 2015/12/4.
 */
$(function () {
    //添加地址检测
    $('.sure_btn').click(function () {
        //检测姓名
        var name_val=$('.fill_name').val();
        if(name_val==''){
            $('.fill_name').next().show();
        }else{
            $('.fill_name').next().hide();
        }
        //检测手机号码
        var re=/^1[3|4|5|8][0-9]\d{8}$/;
        var tel_val=$('.fill_tel').val();
        if(!re.test(tel_val)){
            $('.fill_tel').next().show();
        }else{
            $('.fill_tel').next().hide();
        }
        //检测地址是否被选中
        if($('select').val()==''){
            $('.select_address .msg').show();
        }else{
            $('.select_address .msg').hide();
        }
        if($('.fill_street').val()==''){
            $('.fill_street').next().show();
        }else{
            $('.fill_street').next().hide();
        }
    })
    //设置默认，删除，编辑

    $('.old_address p').hover(function () {
        var _this=$(this);
        _this.children('.postcode').nextAll().show();
        //编辑
        _this.children('.edit').click(function () {
            $('.new_address').slideDown();
        });
        _this.children('.delete').click(function () {
            $(this).parent().remove();
        });
    }, function () {
        $(this).children('.postcode').nextAll().hide();
    });
    //新增收货地质
    $('.address_info .change').click(function () {
        $('.new_address').slideDown();
    });
    //取消新增地质
    $('.new_address .hd em').click(function () {
        $('.new_address').slideUp();
    });

    //设置发票信息
    $('.ticket_info .change').click(function () {
        $('.no_need').hide();
        $('.need').show();
    });
    $('.need li:first-child em').click(function () {
        $('.need').hide();
        $('.no_need').show();
    });
    //检测发票
    $('.need .btn').click(function () {
        var pInput=$('.need .personal');
        var cInput=$('.need .company');
        if(pInput.prop('checked')||cInput.prop('checked')){
            $('.need .choose').hide();
        }else{
            $('.need .choose').show();
        }
        var hd_Input=$('.need .hd input');
        var bd_Input=$('.need .bd input');
        if(hd_Input.val()==''){
            hd_Input.next().show();
        }else{
            hd_Input.next().hide();
        }
        if(bd_Input.val()==''){
            bd_Input.next().show();
        }else{
            bd_Input.next().hide();
        }
    });
});