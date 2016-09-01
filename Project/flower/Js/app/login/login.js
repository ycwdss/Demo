/**
 * Created by wangzan on 2016/2/16.
 */
define(['jquery'], function () {
    $(function () {
        $('.login_auto .check,.reg_agreement .check').click(function () {

            var $this=$(this);
            if($this.hasClass('icon-duihao')){
                $this.removeClass('icon-duihao');
            }else{
                $(this).addClass('icon-duihao');
            }
        });
        $('.popup_title  i').click(function () {
            $('.popup_wrap').fadeOut(200);
        });
    });
})