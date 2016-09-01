/**
 * Created by jiayin on 2016/2/23.
 */
define(['zepto'], function () {
    $(function () {
        $('.login_free').tap(function () {
            if ($('.login_free').hasClass('login_free_selected')) {
                $(this).removeClass('login_free_selected');
            }
            else {
                $(this).addClass('login_free_selected');
            }
        });

        $('.main .item input').keyup(function () {
            var valNull = false;
            $('.main .item input').each(function (index, item) {
                if ($(item).val() == '') {
                    valNull = true;
                    return false;
                }
            });
            valNull ?'' : $('.btn_disabled').removeClass('btn_disabled');
        });


    });
    //注册
    $(function () {
        $('.txt_phone').keyup(function () {
            var val = $(this).val();
            val == '' ? '' : $('.btn_retransmit_disabled').removeClass('btn_retransmit_disabled');
        })
    });
})
;



