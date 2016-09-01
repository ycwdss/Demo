/**
 * Created by guan on 2015/11/2.
 */
define(['zepto','fhlib/new_totop'],function() {
//选中收货地址列表中的默认地址
    $('.edit1').find('a').click(function () {
        $('.edit1').find('a').attr('id', '');
        $(this).attr('id', 'check');
    });
})