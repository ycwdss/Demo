/**
 * Created by guan on 2015/11/2.
 */
define(['zepto','fhlib/new_totop'],function() {
//ѡ���ջ���ַ�б��е�Ĭ�ϵ�ַ
    $('.edit1').find('a').click(function () {
        $('.edit1').find('a').attr('id', '');
        $(this).attr('id', 'check');
    });
})