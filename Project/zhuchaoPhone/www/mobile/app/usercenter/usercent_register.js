/**
 * Created by guan on 2015/11/6.
 */
define(['zepto','fhlib/new_totop'],function() {
//ע��ʱ��ѡ�û�Э��
    $('.protocol').find('i').click(function () {
        if ($(this).is('.active')) {
            $(this).removeClass('active');
            $('.register').find('input').css('background', '#e4e4e4')
                .attr('disabled', 'disabled');
        }
        else {
            $(this).addClass('active');
            $('.register').find('input').css('background', '#093')
                .removeAttr('disabled', 'disabled');
        }
    });
})